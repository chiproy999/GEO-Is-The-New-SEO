import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useAuth } from "@/hooks/useAuth";
import type { ChecklistProgress } from "@shared/schema";

export function useChecklist() {
  const { user, isAuthenticated } = useAuth();
  const queryClient = useQueryClient();


  const { data: progress = [], isLoading } = useQuery<ChecklistProgress[]>({
    queryKey: ['/api/checklist/progress'],
    enabled: isAuthenticated,
  });

  const { data: summary = {} } = useQuery<{[category: string]: { completed: number; total: number }}>({
    queryKey: ['/api/checklist/summary'],
    enabled: isAuthenticated,
  });

  const updateMutation = useMutation({
    mutationFn: async (data: { category: string; itemId: string; completed: boolean }) => {
      const response = await apiRequest('POST', '/api/checklist/progress', data);
      return response.json();
    },
    onMutate: async (variables) => {
      // Cancel any outgoing refetches
      await queryClient.cancelQueries({ queryKey: ['/api/checklist/progress'] });
      await queryClient.cancelQueries({ queryKey: ['/api/checklist/summary'] });

      // Snapshot the previous value
      const previousProgress = queryClient.getQueryData<ChecklistProgress[]>(['/api/checklist/progress']);
      const previousSummary = queryClient.getQueryData(['/api/checklist/summary']);

      // Optimistically update progress
      if (previousProgress) {
        const existingIndex = previousProgress.findIndex(
          p => p.category === variables.category && p.itemId === variables.itemId
        );
        
        let newProgress = [...previousProgress];
        if (existingIndex >= 0) {
          // Update existing item
          newProgress[existingIndex] = {
            ...newProgress[existingIndex],
            completed: variables.completed
          };
        } else {
          // Add new item (optimistic)
          newProgress.push({
            id: `temp-${Date.now()}`,
            userId: user?.id || 'temp-user',
            category: variables.category,
            itemId: variables.itemId,
            completed: variables.completed,
            completedAt: variables.completed ? new Date() : null
          });
        }
        queryClient.setQueryData(['/api/checklist/progress'], newProgress);

        // Also optimistically update the summary
        if (previousSummary) {
          const updatedSummary = { ...previousSummary };
          const categoryData = updatedSummary[variables.category] || { completed: 0, total: 6 };
          
          if (existingIndex >= 0) {
            // Existing item - check if completion status changed
            const wasCompleted = previousProgress[existingIndex].completed;
            if (variables.completed && !wasCompleted) {
              categoryData.completed += 1;
            } else if (!variables.completed && wasCompleted) {
              categoryData.completed -= 1;
            }
          } else {
            // New item - increment if completed
            if (variables.completed) {
              categoryData.completed += 1;
            }
          }
          
          updatedSummary[variables.category] = categoryData;
          queryClient.setQueryData(['/api/checklist/summary'], updatedSummary);
        }
      }

      // Return a context object with the snapshotted value
      return { previousProgress, previousSummary };
    },
    onError: (err, newData, context) => {
      // Rollback on error
      if (context?.previousProgress) {
        queryClient.setQueryData(['/api/checklist/progress'], context.previousProgress);
      }
      if (context?.previousSummary) {
        queryClient.setQueryData(['/api/checklist/summary'], context.previousSummary);
      }
    },
    onSettled: () => {
      // Always refetch after error or success
      queryClient.invalidateQueries({ queryKey: ['/api/checklist/progress'] });
      queryClient.invalidateQueries({ queryKey: ['/api/checklist/summary'] });
    },
  });

  const isItemCompleted = (category: string, itemId: string) => {
    return progress.some(p => p.category === category && p.itemId === itemId && p.completed);
  };

  const updateItem = (category: string, itemId: string, completed: boolean) => {
    updateMutation.mutate({ category, itemId, completed });
  };

  const getCategoryProgress = (category: string) => {
    return summary[category] || { completed: 0, total: 0 };
  };

  const getTotalProgress = () => {
    const categories = ['geo', 'maps', 'technical'];
    let totalCompleted = 0;
    let totalItems = 0;
    
    categories.forEach(cat => {
      const catProgress = summary[cat] || { completed: 0, total: 0 };
      totalCompleted += catProgress.completed;
      totalItems += catProgress.total;
    });

    return { completed: totalCompleted, total: totalItems };
  };

  return {
    progress,
    summary,
    isLoading,
    isItemCompleted,
    updateItem,
    getCategoryProgress,
    getTotalProgress,
    isUpdating: updateMutation.isPending,
  };
}

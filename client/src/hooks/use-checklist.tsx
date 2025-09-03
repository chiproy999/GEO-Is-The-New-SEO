import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useAuth } from "@/hooks/useAuth";
import type { ChecklistProgress } from "@shared/schema";

export function useChecklist() {
  const { user, isAuthenticated } = useAuth();
  const queryClient = useQueryClient();

  const userId = user?.id;

  const { data: progress = [], isLoading } = useQuery<ChecklistProgress[]>({
    queryKey: ['/api/checklist/progress', userId],
    enabled: isAuthenticated,
  });

  const { data: summary = {} } = useQuery<{[category: string]: { completed: number; total: number }}>({
    queryKey: ['/api/checklist/summary', userId],
    enabled: isAuthenticated,
  });

  const updateMutation = useMutation({
    mutationFn: async (data: { category: string; itemId: string; completed: boolean; userId?: string }) => {
      const response = await apiRequest('POST', '/api/checklist/progress', data);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/checklist/progress'] });
      queryClient.invalidateQueries({ queryKey: ['/api/checklist/summary'] });
    },
  });

  const isItemCompleted = (category: string, itemId: string) => {
    return progress.some(p => p.category === category && p.itemId === itemId && p.completed);
  };

  const updateItem = (category: string, itemId: string, completed: boolean) => {
    updateMutation.mutate({ category, itemId, completed, userId });
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

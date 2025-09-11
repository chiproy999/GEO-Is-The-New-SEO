import { useState } from "react";
import { useChecklist } from "@/hooks/use-checklist";
import { getChecklistItemsByCategory } from "@shared/checklist-data";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { trackEvent } from "@/lib/analytics";

export default function InteractiveChecklist() {
  const [activeTab, setActiveTab] = useState<'geo' | 'maps' | 'technical'>('geo');
  const { isItemCompleted, updateItem, getCategoryProgress, getTotalProgress, isUpdating } = useChecklist();

  const tabs = [
    { id: 'geo' as const, label: 'GEO Optimization' },
    { id: 'maps' as const, label: 'Google Maps' },
    { id: 'technical' as const, label: 'Technical Setup' }
  ];

  const activeItems = getChecklistItemsByCategory(activeTab);
  const categoryProgress = getCategoryProgress(activeTab);
  const totalProgress = getTotalProgress();
  const progressPercentage = totalProgress.total > 0 ? (totalProgress.completed / totalProgress.total) * 100 : 0;

  const handleItemChange = (itemId: string, completed: boolean) => {
    updateItem(activeTab, itemId, completed);
    
    // Track checklist interactions for analytics
    trackEvent(
      completed ? 'checklist_item_completed' : 'checklist_item_unchecked',
      'checklist',
      `${activeTab}_${itemId}`,
      1
    );
  };

  return (
    <section id="checklist" className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-gray-900">Interactive Optimization Checklist</h2>
        <div className="text-sm text-gray-600 flex items-center gap-4">
          <span>{totalProgress.completed} of {totalProgress.total} completed</span>
          <div className="w-32">
            <Progress value={progressPercentage} className="h-2" />
          </div>
        </div>
      </div>

      {/* Checklist Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant="ghost"
              className={`border-b-2 py-2 px-1 text-sm font-medium ${
                activeTab === tab.id
                  ? 'border-brand-blue text-brand-blue'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => {
                setActiveTab(tab.id);
                trackEvent('checklist_tab_change', 'navigation', tab.id);
              }}
            >
              {tab.label}
            </Button>
          ))}
        </nav>
      </div>

      {/* Checklist Content */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          {tabs.find(t => t.id === activeTab)?.label} Tasks
        </h3>
        <div className="space-y-3">
          {activeItems.map((item) => {
            const isCompleted = isItemCompleted(activeTab, item.id);
            
            return (
              <label 
                key={item.id}
                className="flex items-start space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <div className="pt-1">
                  <Checkbox
                    checked={isCompleted}
                    onCheckedChange={(checked) => handleItemChange(item.id, !!checked)}
                    disabled={isUpdating}
                    className="h-4 w-4"
                    data-testid={`checkbox-${item.id}`}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className={`font-medium ${isCompleted ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                    {item.title}
                  </div>
                  <div className={`text-sm mt-1 ${isCompleted ? 'text-gray-400' : 'text-gray-600'}`}>
                    {item.description}
                  </div>
                </div>
              </label>
            );
          })}
        </div>

        {activeItems.length > 0 && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-blue-900">
                {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Progress
              </span>
              <span className="text-sm text-blue-700">
                {categoryProgress.completed} of {categoryProgress.total} completed
              </span>
            </div>
            <div className="mt-2">
              <Progress 
                value={categoryProgress.total > 0 ? (categoryProgress.completed / categoryProgress.total) * 100 : 0} 
                className="h-2"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

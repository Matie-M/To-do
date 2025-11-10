import React from 'react';
import { CheckCircle2, ListTodo, Filter } from 'lucide-react';

function EmptyState({ filterStatus }) {
  const getEmptyMessage = () => {
    switch (filterStatus) {
      case 'active':
        return {
          icon: <CheckCircle2 className="w-16 h-16 text-teal-400" />,
          title: 'All caught up!',
          description: 'No active tasks. Time to celebrate! 🎉'
        };
      case 'completed':
        return {
          icon: <ListTodo className="w-16 h-16 text-neutral-400" />,
          title: 'No completed tasks yet',
          description: 'Complete some tasks to see them here.'
        };
      default:
        return {
          icon: <ListTodo className="w-16 h-16 text-neutral-400" />,
          title: 'No tasks yet',
          description: 'Create your first task to get started!'
        };
    }
  };

  const message = getEmptyMessage();

  return (
    <div 
      className="flex flex-col items-center justify-center py-16 text-center"
      data-testid="empty-state"
    >
      <div className="mb-4">
        {message.icon}
      </div>
      <h3 className="text-xl font-semibold text-neutral-800 mb-2">
        {message.title}
      </h3>
      <p className="text-neutral-500 max-w-md">
        {message.description}
      </p>
    </div>
  );
}

export default EmptyState;
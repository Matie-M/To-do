import React, { useState } from 'react';
import { Pencil, Trash2, Calendar, CheckCircle2, Circle } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from './ui/alert-dialog';
import { format, isPast, isToday, isTomorrow, parseISO } from 'date-fns';

const CATEGORY_COLORS = {
  Work: 'bg-blue-100 text-blue-700 border-blue-200',
  Personal: 'bg-purple-100 text-purple-700 border-purple-200',
  Shopping: 'bg-pink-100 text-pink-700 border-pink-200',
  Health: 'bg-green-100 text-green-700 border-green-200',
  Other: 'bg-gray-100 text-gray-700 border-gray-200'
};

function TaskItem({ task, onToggle, onEdit, onDelete }) {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const handleDelete = () => {
    onDelete(task.id);
    setShowDeleteDialog(false);
  };

  // Format due date and determine status
  const getDueDateInfo = () => {
    if (!task.due_date) return null;

    const dueDate = parseISO(task.due_date);
    const now = new Date();

    let status = 'normal';
    let text = format(dueDate, 'MMM d, yyyy');

    if (isPast(dueDate) && !isToday(dueDate) && !task.completed) {
      status = 'overdue';
      text = `Overdue: ${text}`;
    } else if (isToday(dueDate)) {
      status = 'today';
      text = 'Due Today';
    } else if (isTomorrow(dueDate)) {
      status = 'soon';
      text = 'Due Tomorrow';
    }

    return { status, text };
  };

  const dueDateInfo = getDueDateInfo();

  return (
    <>
      <Card 
        className={`p-4 sm:p-5 bg-white hover:shadow-lg transition-all border-neutral-200 ${
          task.completed ? 'opacity-70' : ''
        }`}
        data-testid="task-item"
        data-task-id={task.id}
      >
        <div className="flex items-start gap-4">
          {/* Checkbox */}
          <button
            onClick={() => onToggle(task.id)}
            className="mt-1 flex-shrink-0 transition-colors"
            data-testid="task-checkbox"
          >
            {task.completed ? (
              <CheckCircle2 className="w-6 h-6 text-teal-500" />
            ) : (
              <Circle className="w-6 h-6 text-neutral-300 hover:text-teal-500" />
            )}
          </button>

          {/* Content */}
          <div className="flex-1 min-w-0">
            {/* Title and Category */}
            <div className="flex items-start gap-2 mb-2 flex-wrap">
              <h3 
                className={`text-base font-medium text-neutral-800 flex-1 ${
                  task.completed ? 'line-through text-neutral-500' : ''
                }`}
                data-testid="task-title"
              >
                {task.title}
              </h3>
              <Badge 
                variant="outline" 
                className={`${CATEGORY_COLORS[task.category]} text-xs font-medium px-2 py-0.5 flex-shrink-0`}
                data-testid="task-category"
              >
                {task.category}
              </Badge>
            </div>

            {/* Description */}
            {task.description && (
              <p className="text-sm text-neutral-600 mb-2 line-clamp-2" data-testid="task-description">
                {task.description}
              </p>
            )}

            {/* Due Date */}
            {dueDateInfo && (
              <div className="flex items-center gap-1.5 text-xs" data-testid="task-duedate">
                <Calendar className="w-3.5 h-3.5" />
                <span 
                  className={`font-medium ${
                    dueDateInfo.status === 'overdue' ? 'text-red-600' :
                    dueDateInfo.status === 'today' ? 'text-orange-600' :
                    dueDateInfo.status === 'soon' ? 'text-orange-500' :
                    'text-neutral-500'
                  }`}
                >
                  {dueDateInfo.text}
                </span>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => onEdit(task)}
              className="p-2 text-neutral-500 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors"
              data-testid="task-edit-button"
              aria-label="Edit task"
            >
              <Pencil className="w-4 h-4" />
            </button>
            <button
              onClick={() => setShowDeleteDialog(true)}
              className="p-2 text-neutral-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              data-testid="task-delete-button"
              aria-label="Delete task"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Card>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Task</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this task? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel data-testid="delete-cancel-button">Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleDelete}
              className="bg-red-600 hover:bg-red-700"
              data-testid="delete-confirm-button"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export default TaskItem;
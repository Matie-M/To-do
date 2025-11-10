import React, { useState, useEffect } from 'react';
import { Calendar, Tag, AlignLeft, Type } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from './ui/dialog';
import { Button } from './ui/button';
import { format, parseISO } from 'date-fns';

const CATEGORIES = ['Work', 'Personal', 'Shopping', 'Health', 'Other'];

function EditModal({ task, onClose, onSave }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    due_date: '',
    category: 'Work',
    completed: false
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (task) {
      setFormData({
        title: task.title || '',
        description: task.description || '',
        due_date: task.due_date ? format(parseISO(task.due_date), 'yyyy-MM-dd') : '',
        category: task.category || 'Work',
        completed: task.completed || false
      });
    }
  }, [task]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.title.trim()) {
      return;
    }

    setSubmitting(true);
    try {
      const submitData = {
        title: formData.title,
        description: formData.description,
        category: formData.category,
        completed: formData.completed
      };

      // Add due_date only if provided
      if (formData.due_date) {
        submitData.due_date = new Date(formData.due_date).toISOString();
      } else {
        submitData.due_date = null;
      }

      await onSave(task.id, submitData);
    } catch (error) {
      console.error('Error updating task:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={!!task} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[500px]" data-testid="edit-modal">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Type className="w-5 h-5 text-teal-500" />
            Edit Task
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div className="space-y-2">
            <Label htmlFor="edit-title" className="text-sm font-medium text-neutral-700">
              Title *
            </Label>
            <Input
              id="edit-title"
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Enter task title..."
              required
              className="border-neutral-300 focus:border-teal-500 focus:ring-teal-500"
              data-testid="edit-task-title-input"
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="edit-description" className="text-sm font-medium text-neutral-700 flex items-center gap-2">
              <AlignLeft className="w-4 h-4" />
              Description
            </Label>
            <Textarea
              id="edit-description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Add more details..."
              rows={3}
              className="border-neutral-300 focus:border-teal-500 focus:ring-teal-500"
              data-testid="edit-task-description-input"
            />
          </div>

          {/* Due Date and Category Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Due Date */}
            <div className="space-y-2">
              <Label htmlFor="edit-due_date" className="text-sm font-medium text-neutral-700 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Due Date
              </Label>
              <Input
                id="edit-due_date"
                type="date"
                value={formData.due_date}
                onChange={(e) => setFormData({ ...formData, due_date: e.target.value })}
                className="border-neutral-300 focus:border-teal-500 focus:ring-teal-500"
                data-testid="edit-task-duedate-input"
              />
            </div>

            {/* Category */}
            <div className="space-y-2">
              <Label htmlFor="edit-category" className="text-sm font-medium text-neutral-700 flex items-center gap-2">
                <Tag className="w-4 h-4" />
                Category
              </Label>
              <Select
                value={formData.category}
                onValueChange={(value) => setFormData({ ...formData, category: value })}
              >
                <SelectTrigger className="border-neutral-300 focus:border-teal-500 focus:ring-teal-500" data-testid="edit-task-category-select">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {CATEGORIES.map((cat) => (
                    <SelectItem key={cat} value={cat} data-testid={`edit-category-option-${cat.toLowerCase()}`}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Actions */}
          <DialogFooter className="gap-2 pt-2">
            <Button
              type="button"
              onClick={onClose}
              variant="outline"
              className="btn-secondary"
              data-testid="edit-cancel-button"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={submitting || !formData.title.trim()}
              className="btn-primary"
              data-testid="edit-save-button"
            >
              {submitting ? 'Saving...' : 'Save Changes'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default EditModal;
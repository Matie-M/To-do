import React, { useState } from 'react';
import { Calendar, Tag, AlignLeft, Type } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card } from './ui/card';
import { Button } from './ui/button';

const CATEGORIES = ['Work', 'Personal', 'Shopping', 'Health', 'Other'];

function TaskForm({ onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    due_date: '',
    category: 'Work'
  });
  const [submitting, setSubmitting] = useState(false);

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
      };

      // Add due_date only if provided
      if (formData.due_date) {
        submitData.due_date = new Date(formData.due_date).toISOString();
      }

      await onSubmit(submitData);
      
      // Reset form
      setFormData({
        title: '',
        description: '',
        due_date: '',
        category: 'Work'
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Card className="p-6 bg-white shadow-md border-neutral-200" data-testid="task-form">
      <h2 className="text-xl font-semibold mb-4 text-neutral-800 flex items-center gap-2">
        <Type className="w-5 h-5 text-teal-500" />
        New Task
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div className="space-y-2">
          <Label htmlFor="title" className="text-sm font-medium text-neutral-700">
            Title *
          </Label>
          <Input
            id="title"
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="Enter task title..."
            required
            className="border-neutral-300 focus:border-teal-500 focus:ring-teal-500"
            data-testid="task-title-input"
          />
        </div>

        {/* Description */}
        <div className="space-y-2">
          <Label htmlFor="description" className="text-sm font-medium text-neutral-700 flex items-center gap-2">
            <AlignLeft className="w-4 h-4" />
            Description
          </Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Add more details..."
            rows={3}
            className="border-neutral-300 focus:border-teal-500 focus:ring-teal-500"
            data-testid="task-description-input"
          />
        </div>

        {/* Due Date and Category Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Due Date */}
          <div className="space-y-2">
            <Label htmlFor="due_date" className="text-sm font-medium text-neutral-700 flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Due Date
            </Label>
            <Input
              id="due_date"
              type="date"
              value={formData.due_date}
              onChange={(e) => setFormData({ ...formData, due_date: e.target.value })}
              className="border-neutral-300 focus:border-teal-500 focus:ring-teal-500"
              data-testid="task-duedate-input"
            />
          </div>

          {/* Category */}
          <div className="space-y-2">
            <Label htmlFor="category" className="text-sm font-medium text-neutral-700 flex items-center gap-2">
              <Tag className="w-4 h-4" />
              Category
            </Label>
            <Select
              value={formData.category}
              onValueChange={(value) => setFormData({ ...formData, category: value })}
            >
              <SelectTrigger className="border-neutral-300 focus:border-teal-500 focus:ring-teal-500" data-testid="task-category-select">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {CATEGORIES.map((cat) => (
                  <SelectItem key={cat} value={cat} data-testid={`category-option-${cat.toLowerCase()}`}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-2">
          <Button
            type="submit"
            disabled={submitting || !formData.title.trim()}
            className="btn-primary flex-1"
            data-testid="task-submit-button"
          >
            {submitting ? 'Creating...' : 'Create Task'}
          </Button>
          <Button
            type="button"
            onClick={onCancel}
            variant="outline"
            className="btn-secondary"
            data-testid="task-cancel-button"
          >
            Cancel
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default TaskForm;
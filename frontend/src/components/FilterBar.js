import React from 'react';
import { ListFilter } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const STATUS_OPTIONS = [
  { value: 'all', label: 'All Tasks' },
  { value: 'active', label: 'Active' },
  { value: 'completed', label: 'Completed' }
];

const CATEGORY_OPTIONS = [
  { value: 'all', label: 'All Categories' },
  { value: 'Work', label: 'Work' },
  { value: 'Personal', label: 'Personal' },
  { value: 'Shopping', label: 'Shopping' },
  { value: 'Health', label: 'Health' },
  { value: 'Other', label: 'Other' }
];

function FilterBar({ filterStatus, setFilterStatus, filterCategory, setFilterCategory }) {
  return (
    <div className="mb-6 flex flex-col sm:flex-row gap-3" data-testid="filter-bar">
      <div className="flex items-center gap-2 text-neutral-700">
        <ListFilter className="w-5 h-5 text-neutral-500" />
        <span className="text-sm font-medium">Filter:</span>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3 flex-1">
        {/* Status Filter */}
        <Select value={filterStatus} onValueChange={setFilterStatus}>
          <SelectTrigger 
            className="w-full sm:w-48 border-neutral-300 focus:border-teal-500 focus:ring-teal-500"
            data-testid="filter-status-select"
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {STATUS_OPTIONS.map((option) => (
              <SelectItem 
                key={option.value} 
                value={option.value}
                data-testid={`status-filter-${option.value}`}
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Category Filter */}
        <Select value={filterCategory} onValueChange={setFilterCategory}>
          <SelectTrigger 
            className="w-full sm:w-48 border-neutral-300 focus:border-teal-500 focus:ring-teal-500"
            data-testid="filter-category-select"
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {CATEGORY_OPTIONS.map((option) => (
              <SelectItem 
                key={option.value} 
                value={option.value}
                data-testid={`category-filter-${option.value}`}
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default FilterBar;
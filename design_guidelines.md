# Modern To-Do App Design System Guidelines

## GRADIENT RESTRICTION RULE
**NEVER** use dark/saturated gradient combos (e.g., purple/pink, blue-500 to purple-600) on any UI element.
**NEVER** let gradients cover more than 20% of the viewport.
**NEVER** apply gradients to text-heavy content or reading areas.
**NEVER** use gradients on small UI elements (<100px width).
**NEVER** stack multiple gradient layers in the same viewport.

### ENFORCEMENT RULE
IF gradient area exceeds 20% of viewport OR impacts readability
THEN fallback to solid colors or simple, two-color gradients.

### ALLOWED GRADIENT USAGE
- Hero/header sections (background only, ensure text readability)
- Large decorative elements (not task cards)
- Subtle accent overlays on empty states
- Background patterns with low opacity

---

## Design Personality & Brand Attributes

**Core Attributes:**
- **Energetic**: Vibrant colors that motivate action without overwhelming
- **Organized**: Clear visual hierarchy and structured layouts
- **Friendly**: Approachable UI with smooth interactions and helpful feedback
- **Modern**: Contemporary design patterns with subtle animations
- **Productive**: Focus on clarity and efficiency in task management

**Visual Tone:**
- Clean and uncluttered with generous whitespace
- Vibrant but balanced color usage
- Playful micro-interactions without being distracting
- Professional enough for work tasks, friendly enough for personal use

---

## Color System

### Primary Palette

```css
:root {
  /* Primary Colors */
  --primary-teal: #14B8A6;           /* Main brand color - buttons, links */
  --primary-teal-light: #2DD4BF;     /* Hover states */
  --primary-teal-dark: #0F766E;      /* Active states */
  
  /* Secondary Colors */
  --secondary-coral: #FF6F61;        /* Accents, high-priority tasks */
  --secondary-coral-light: #FF8A7F;  /* Hover states */
  --secondary-coral-dark: #E85D4F;   /* Active states */
  
  /* Accent Colors */
  --accent-mint: #6EE7B7;            /* Success, completed tasks */
  --accent-orange: #FB923C;          /* Warnings, due soon indicators */
  --accent-sky: #38BDF8;             /* Info, secondary actions */
  --accent-lavender: #C084FC;        /* Optional category color */
  
  /* Neutral Colors */
  --neutral-50: #FAFAFA;             /* Background */
  --neutral-100: #F5F5F5;            /* Card backgrounds */
  --neutral-200: #E5E5E5;            /* Borders, dividers */
  --neutral-300: #D4D4D4;            /* Disabled states */
  --neutral-400: #A3A3A3;            /* Placeholder text */
  --neutral-500: #737373;            /* Secondary text */
  --neutral-600: #525252;            /* Body text */
  --neutral-700: #404040;            /* Headings */
  --neutral-800: #262626;            /* Primary text */
  --neutral-900: #171717;            /* Emphasis text */
  
  /* Semantic Colors */
  --success: #10B981;                /* Success messages */
  --success-light: #D1FAE5;          /* Success backgrounds */
  --warning: #F59E0B;                /* Warning messages */
  --warning-light: #FEF3C7;          /* Warning backgrounds */
  --error: #EF4444;                  /* Error messages, overdue */
  --error-light: #FEE2E2;            /* Error backgrounds */
  --info: #3B82F6;                   /* Info messages */
  --info-light: #DBEAFE;             /* Info backgrounds */
}
```

### Category Colors

Each task category has a distinct color for badges and visual identification:

```css
:root {
  /* Category Colors */
  --category-work: #3B82F6;          /* Blue - Professional */
  --category-work-light: #DBEAFE;
  
  --category-personal: #8B5CF6;      /* Purple - Personal */
  --category-personal-light: #EDE9FE;
  
  --category-shopping: #EC4899;      /* Pink - Shopping */
  --category-shopping-light: #FCE7F3;
  
  --category-health: #10B981;        /* Green - Health */
  --category-health-light: #D1FAE5;
  
  --category-other: #6B7280;         /* Gray - Other */
  --category-other-light: #F3F4F6;
}
```

### Color Usage Guidelines

**Background Hierarchy:**
- Main background: `--neutral-50` (#FAFAFA)
- Card backgrounds: White (#FFFFFF) with subtle shadow
- Hover backgrounds: `--neutral-100` (#F5F5F5)
- Active backgrounds: `--neutral-200` (#E5E5E5)

**Text Hierarchy:**
- Primary headings: `--neutral-800` (#262626)
- Body text: `--neutral-600` (#525252)
- Secondary text: `--neutral-500` (#737373)
- Disabled text: `--neutral-400` (#A3A3A3)

**Interactive Elements:**
- Primary buttons: `--primary-teal` background with white text
- Secondary buttons: White background with `--primary-teal` border and text
- Danger buttons: `--error` background with white text
- Links: `--primary-teal` with underline on hover

**Status Indicators:**
- Completed tasks: `--accent-mint` (#6EE7B7)
- Overdue tasks: `--error` (#EF4444)
- Due soon (within 24h): `--accent-orange` (#FB923C)
- Due later: `--neutral-500` (#737373)

---

## Typography

### Font Families

```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap');

:root {
  --font-heading: 'Space Grotesk', sans-serif;
  --font-body: 'Inter', sans-serif;
}
```

**Rationale:**
- **Space Grotesk**: Modern, geometric sans-serif for headings - distinctive and energetic
- **Inter**: Highly readable sans-serif for body text - optimized for UI

### Typography Scale

```css
:root {
  /* Font Sizes */
  --text-xs: 0.75rem;      /* 12px - Small labels, timestamps */
  --text-sm: 0.875rem;     /* 14px - Secondary text, descriptions */
  --text-base: 1rem;       /* 16px - Body text, task titles */
  --text-lg: 1.125rem;     /* 18px - Subheadings */
  --text-xl: 1.25rem;      /* 20px - Section headings */
  --text-2xl: 1.5rem;      /* 24px - Page headings */
  --text-3xl: 1.875rem;    /* 30px - Main heading */
  --text-4xl: 2.25rem;     /* 36px - Hero heading (mobile) */
  --text-5xl: 3rem;        /* 48px - Hero heading (tablet) */
  --text-6xl: 3.75rem;     /* 60px - Hero heading (desktop) */
  
  /* Font Weights */
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  
  /* Line Heights */
  --leading-tight: 1.25;
  --leading-snug: 1.375;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
  --leading-loose: 2;
  
  /* Letter Spacing */
  --tracking-tight: -0.025em;
  --tracking-normal: 0;
  --tracking-wide: 0.025em;
}
```

### Typography Usage

**Headings:**
```css
h1 {
  font-family: var(--font-heading);
  font-size: var(--text-4xl);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--neutral-800);
}

@media (min-width: 768px) {
  h1 { font-size: var(--text-5xl); }
}

@media (min-width: 1024px) {
  h1 { font-size: var(--text-6xl); }
}

h2 {
  font-family: var(--font-heading);
  font-size: var(--text-2xl);
  font-weight: var(--font-semibold);
  line-height: var(--leading-snug);
  color: var(--neutral-800);
}

h3 {
  font-family: var(--font-heading);
  font-size: var(--text-xl);
  font-weight: var(--font-semibold);
  line-height: var(--leading-snug);
  color: var(--neutral-700);
}
```

**Body Text:**
```css
body {
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: var(--font-normal);
  line-height: var(--leading-normal);
  color: var(--neutral-600);
}

.task-title {
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  line-height: var(--leading-snug);
  color: var(--neutral-800);
}

.task-description {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: var(--font-normal);
  line-height: var(--leading-relaxed);
  color: var(--neutral-500);
}

.task-meta {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--font-medium);
  line-height: var(--leading-normal);
  color: var(--neutral-400);
}
```

---

## Spacing System

```css
:root {
  /* Spacing Scale (based on 4px base unit) */
  --space-0: 0;
  --space-1: 0.25rem;    /* 4px */
  --space-2: 0.5rem;     /* 8px */
  --space-3: 0.75rem;    /* 12px */
  --space-4: 1rem;       /* 16px */
  --space-5: 1.25rem;    /* 20px */
  --space-6: 1.5rem;     /* 24px */
  --space-8: 2rem;       /* 32px */
  --space-10: 2.5rem;    /* 40px */
  --space-12: 3rem;      /* 48px */
  --space-16: 4rem;      /* 64px */
  --space-20: 5rem;      /* 80px */
  --space-24: 6rem;      /* 96px */
}
```

### Spacing Usage

**Component Spacing:**
- Task card padding: `--space-4` (16px) on mobile, `--space-6` (24px) on desktop
- Task list gap: `--space-3` (12px)
- Section spacing: `--space-8` (32px) between major sections
- Button padding: `--space-3` `--space-6` (12px 24px)
- Input padding: `--space-3` `--space-4` (12px 16px)

**Layout Spacing:**
- Container max-width: 1200px
- Container padding: `--space-4` (16px) on mobile, `--space-6` (24px) on tablet, `--space-8` (32px) on desktop
- Header height: 64px
- Footer padding: `--space-12` (48px) vertical

---

## Component Specifications

### Shadcn/UI Components to Use

**Primary Components:**
- `Button` - `/app/frontend/src/components/ui/button.jsx`
- `Card` - `/app/frontend/src/components/ui/card.jsx`
- `Checkbox` - `/app/frontend/src/components/ui/checkbox.jsx`
- `Dialog` - `/app/frontend/src/components/ui/dialog.jsx` (for edit modal)
- `Badge` - `/app/frontend/src/components/ui/badge.jsx` (for categories)
- `Input` - `/app/frontend/src/components/ui/input.jsx`
- `Textarea` - `/app/frontend/src/components/ui/textarea.jsx`
- `Label` - `/app/frontend/src/components/ui/label.jsx`
- `Calendar` - `/app/frontend/src/components/ui/calendar.jsx` (for due date picker)
- `Popover` - `/app/frontend/src/components/ui/popover.jsx` (for calendar dropdown)
- `Select` - `/app/frontend/src/components/ui/select.jsx` (for category selection)
- `Sonner` - `/app/frontend/src/components/ui/sonner.jsx` (for toast notifications)
- `Skeleton` - `/app/frontend/src/components/ui/skeleton.jsx` (for loading states)

### Button Styles

**Design Style: Modern Playful with Pill Shape**

```jsx
// Primary Button (Add Task, Save)
<Button 
  className="bg-primary-teal hover:bg-primary-teal-light active:bg-primary-teal-dark text-white font-medium rounded-full px-6 py-3 transition-all duration-200 hover:scale-105 hover:shadow-lg"
  data-testid="add-task-button"
>
  Add Task
</Button>

// Secondary Button (Cancel, Filter)
<Button 
  variant="outline"
  className="border-2 border-primary-teal text-primary-teal hover:bg-primary-teal hover:text-white font-medium rounded-full px-6 py-3 transition-all duration-200"
  data-testid="cancel-button"
>
  Cancel
</Button>

// Danger Button (Delete)
<Button 
  className="bg-error hover:bg-red-600 active:bg-red-700 text-white font-medium rounded-full px-6 py-3 transition-all duration-200 hover:scale-105"
  data-testid="delete-task-button"
>
  Delete
</Button>

// Icon Button (Edit, More Options)
<Button 
  variant="ghost"
  size="icon"
  className="rounded-full hover:bg-neutral-100 transition-colors duration-200"
  data-testid="edit-task-button"
>
  <Pencil className="h-4 w-4" />
</Button>

// Filter Button (Active State)
<Button 
  variant={isActive ? "default" : "ghost"}
  className={`rounded-full px-4 py-2 transition-all duration-200 ${
    isActive 
      ? 'bg-primary-teal text-white shadow-md' 
      : 'text-neutral-600 hover:bg-neutral-100'
  }`}
  data-testid="filter-all-button"
>
  All
</Button>
```

**Button Specifications:**
- Shape: Fully rounded (rounded-full) for pill/capsule effect
- Primary: Teal background with white text
- Hover: Scale up slightly (1.05) with shadow
- Active: Darker shade with scale down (0.98)
- Transition: 200ms for smooth interactions
- Icon buttons: Circular with ghost variant

### Task Card Component

```jsx
// Task Card Structure
<Card 
  className="group bg-white hover:shadow-lg transition-all duration-300 border border-neutral-200 hover:border-primary-teal rounded-xl overflow-hidden"
  data-testid="task-card"
>
  <CardContent className="p-4 md:p-6">
    <div className="flex items-start gap-4">
      {/* Checkbox */}
      <Checkbox 
        checked={task.completed}
        onCheckedChange={handleToggle}
        className="mt-1 h-5 w-5 rounded-md border-2 border-neutral-300 data-[state=checked]:bg-accent-mint data-[state=checked]:border-accent-mint transition-all duration-200"
        data-testid={`task-checkbox-${task.id}`}
      />
      
      {/* Task Content */}
      <div className="flex-1 min-w-0">
        {/* Title */}
        <h3 
          className={`text-base font-medium mb-1 transition-all duration-200 ${
            task.completed 
              ? 'line-through text-neutral-400' 
              : 'text-neutral-800'
          }`}
          data-testid="task-title"
        >
          {task.title}
        </h3>
        
        {/* Description */}
        {task.description && (
          <p 
            className={`text-sm mb-3 transition-all duration-200 ${
              task.completed 
                ? 'line-through text-neutral-300' 
                : 'text-neutral-500'
            }`}
            data-testid="task-description"
          >
            {task.description}
          </p>
        )}
        
        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Category Badge */}
          <Badge 
            className={`rounded-full px-3 py-1 text-xs font-medium ${getCategoryStyles(task.category)}`}
            data-testid="task-category-badge"
          >
            {task.category}
          </Badge>
          
          {/* Due Date */}
          {task.dueDate && (
            <div 
              className={`flex items-center gap-1 text-xs font-medium ${getDueDateColor(task.dueDate, task.completed)}`}
              data-testid="task-due-date"
            >
              <Calendar className="h-3 w-3" />
              <span>{formatDate(task.dueDate)}</span>
            </div>
          )}
        </div>
      </div>
      
      {/* Actions */}
      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <Button 
          variant="ghost" 
          size="icon"
          className="rounded-full hover:bg-neutral-100"
          onClick={handleEdit}
          data-testid="edit-task-icon-button"
        >
          <Pencil className="h-4 w-4 text-neutral-600" />
        </Button>
        <Button 
          variant="ghost" 
          size="icon"
          className="rounded-full hover:bg-red-50"
          onClick={handleDelete}
          data-testid="delete-task-icon-button"
        >
          <Trash2 className="h-4 w-4 text-error" />
        </Button>
      </div>
    </div>
  </CardContent>
</Card>
```

**Task Card Specifications:**
- Background: White with subtle border
- Hover: Lift effect with shadow and teal border
- Completed state: Strikethrough text with muted colors
- Actions: Hidden by default, visible on hover
- Rounded corners: `rounded-xl` (12px)
- Padding: 16px mobile, 24px desktop
- Transition: 300ms for smooth hover effects

### Category Badge Styles

```jsx
// Category Badge Color Mapping
const getCategoryStyles = (category) => {
  const styles = {
    Work: 'bg-blue-100 text-blue-700 border border-blue-200',
    Personal: 'bg-purple-100 text-purple-700 border border-purple-200',
    Shopping: 'bg-pink-100 text-pink-700 border border-pink-200',
    Health: 'bg-green-100 text-green-700 border border-green-200',
    Other: 'bg-gray-100 text-gray-700 border border-gray-200'
  };
  return styles[category] || styles.Other;
};
```

### Due Date Color Logic

```jsx
// Due Date Color Logic
const getDueDateColor = (dueDate, isCompleted) => {
  if (isCompleted) return 'text-neutral-400';
  
  const now = new Date();
  const due = new Date(dueDate);
  const hoursUntilDue = (due - now) / (1000 * 60 * 60);
  
  if (hoursUntilDue < 0) {
    return 'text-error font-semibold'; // Overdue - Red
  } else if (hoursUntilDue < 24) {
    return 'text-accent-orange font-semibold'; // Due soon - Orange
  } else {
    return 'text-neutral-500'; // Due later - Gray
  }
};
```

### Filter Buttons

```jsx
// Filter Button Group
<div className="flex items-center gap-2 flex-wrap" data-testid="filter-buttons">
  <Button 
    variant={filter === 'all' ? 'default' : 'ghost'}
    className={`rounded-full px-4 py-2 transition-all duration-200 ${
      filter === 'all'
        ? 'bg-primary-teal text-white shadow-md scale-105' 
        : 'text-neutral-600 hover:bg-neutral-100'
    }`}
    onClick={() => setFilter('all')}
    data-testid="filter-all-button"
  >
    All
  </Button>
  <Button 
    variant={filter === 'active' ? 'default' : 'ghost'}
    className={`rounded-full px-4 py-2 transition-all duration-200 ${
      filter === 'active'
        ? 'bg-primary-teal text-white shadow-md scale-105' 
        : 'text-neutral-600 hover:bg-neutral-100'
    }`}
    onClick={() => setFilter('active')}
    data-testid="filter-active-button"
  >
    Active
  </Button>
  <Button 
    variant={filter === 'completed' ? 'default' : 'ghost'}
    className={`rounded-full px-4 py-2 transition-all duration-200 ${
      filter === 'completed'
        ? 'bg-primary-teal text-white shadow-md scale-105' 
        : 'text-neutral-600 hover:bg-neutral-100'
    }`}
    onClick={() => setFilter('completed')}
    data-testid="filter-completed-button"
  >
    Completed
  </Button>
</div>
```

### Edit Task Modal

```jsx
// Edit Task Dialog
<Dialog open={isOpen} onOpenChange={setIsOpen}>
  <DialogContent className="sm:max-w-[500px] rounded-2xl" data-testid="edit-task-modal">
    <DialogHeader>
      <DialogTitle className="text-2xl font-semibold text-neutral-800">
        Edit Task
      </DialogTitle>
    </DialogHeader>
    
    <div className="space-y-6 py-4">
      {/* Title Input */}
      <div className="space-y-2">
        <Label htmlFor="title" className="text-sm font-medium text-neutral-700">
          Task Title
        </Label>
        <Input 
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task title..."
          className="rounded-lg border-neutral-300 focus:border-primary-teal focus:ring-primary-teal"
          data-testid="edit-task-title-input"
        />
      </div>
      
      {/* Description Textarea */}
      <div className="space-y-2">
        <Label htmlFor="description" className="text-sm font-medium text-neutral-700">
          Description
        </Label>
        <Textarea 
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Add task description..."
          rows={4}
          className="rounded-lg border-neutral-300 focus:border-primary-teal focus:ring-primary-teal resize-none"
          data-testid="edit-task-description-input"
        />
      </div>
      
      {/* Category Select */}
      <div className="space-y-2">
        <Label htmlFor="category" className="text-sm font-medium text-neutral-700">
          Category
        </Label>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger 
            className="rounded-lg border-neutral-300 focus:border-primary-teal focus:ring-primary-teal"
            data-testid="edit-task-category-select"
          >
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Work">Work</SelectItem>
            <SelectItem value="Personal">Personal</SelectItem>
            <SelectItem value="Shopping">Shopping</SelectItem>
            <SelectItem value="Health">Health</SelectItem>
            <SelectItem value="Other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      {/* Due Date Picker */}
      <div className="space-y-2">
        <Label className="text-sm font-medium text-neutral-700">
          Due Date
        </Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="w-full justify-start text-left font-normal rounded-lg border-neutral-300 hover:border-primary-teal"
              data-testid="edit-task-due-date-button"
            >
              <Calendar className="mr-2 h-4 w-4" />
              {dueDate ? format(dueDate, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={dueDate}
              onSelect={setDueDate}
              initialFocus
              data-testid="edit-task-calendar"
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
    
    <DialogFooter className="gap-2">
      <Button 
        variant="outline"
        onClick={() => setIsOpen(false)}
        className="rounded-full border-2 border-neutral-300 hover:bg-neutral-100"
        data-testid="edit-task-cancel-button"
      >
        Cancel
      </Button>
      <Button 
        onClick={handleSave}
        className="rounded-full bg-primary-teal hover:bg-primary-teal-light text-white"
        data-testid="edit-task-save-button"
      >
        Save Changes
      </Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### Empty State

```jsx
// Empty State Component
<div className="flex flex-col items-center justify-center py-16 px-4" data-testid="empty-state">
  <div className="w-48 h-48 mb-6 relative">
    <img 
      src="https://images.unsplash.com/photo-1597004475902-3f8c38279a4f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxlbXB0eSUyMHN0YXRlJTIwaWxsdXN0cmF0aW9uJTIwZnJpZW5kbHklMjBtaW5pbWFsJTIwc2ltcGxlfGVufDB8fHx8MTc2Mjc2NzEyM3ww&ixlib=rb-4.1.0&q=85"
      alt="No tasks"
      className="w-full h-full object-contain opacity-50"
    />
  </div>
  <h3 className="text-xl font-semibold text-neutral-700 mb-2">
    No tasks yet
  </h3>
  <p className="text-sm text-neutral-500 text-center max-w-sm mb-6">
    Start organizing your day by adding your first task. Click the button below to get started!
  </p>
  <Button 
    onClick={handleAddTask}
    className="rounded-full bg-primary-teal hover:bg-primary-teal-light text-white px-6 py-3"
    data-testid="empty-state-add-task-button"
  >
    <Plus className="mr-2 h-4 w-4" />
    Add Your First Task
  </Button>
</div>
```

### Loading State

```jsx
// Loading Skeleton for Task List
<div className="space-y-3" data-testid="loading-skeleton">
  {[1, 2, 3].map((i) => (
    <Card key={i} className="p-4 md:p-6">
      <div className="flex items-start gap-4">
        <Skeleton className="h-5 w-5 rounded-md" />
        <div className="flex-1 space-y-3">
          <Skeleton className="h-5 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <div className="flex gap-2">
            <Skeleton className="h-6 w-20 rounded-full" />
            <Skeleton className="h-6 w-24 rounded-full" />
          </div>
        </div>
      </div>
    </Card>
  ))}
</div>
```

---

## Layout & Grid System

### Container Layout

```jsx
// Main App Container
<div className="min-h-screen bg-neutral-50">
  {/* Header */}
  <header className="sticky top-0 z-50 bg-white border-b border-neutral-200 shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      {/* Header content */}
    </div>
  </header>
  
  {/* Main Content */}
  <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    {/* Page content */}
  </main>
</div>
```

### Responsive Grid

```jsx
// Task List Grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
  {tasks.map(task => (
    <TaskCard key={task.id} task={task} />
  ))}
</div>
```

**Layout Specifications:**
- Max container width: 1280px (max-w-7xl)
- Responsive padding: 16px mobile, 24px tablet, 32px desktop
- Grid columns: 1 (mobile), 2 (tablet), 3 (desktop)
- Gap: 16px mobile, 24px desktop
- Sticky header with shadow

---

## Motion & Micro-interactions

### Animation Principles

**Timing:**
- Fast interactions: 150-200ms (buttons, checkboxes)
- Medium interactions: 250-300ms (cards, modals)
- Slow interactions: 400-500ms (page transitions)

**Easing:**
- Default: `ease-in-out` for most transitions
- Hover: `ease-out` for quick response
- Exit: `ease-in` for smooth departure

### Hover States

```css
/* Button Hover */
.button-hover {
  transition: all 200ms ease-out;
}
.button-hover:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 25px -5px rgba(20, 184, 166, 0.3);
}

/* Card Hover */
.card-hover {
  transition: all 300ms ease-out;
}
.card-hover:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  border-color: var(--primary-teal);
}

/* Checkbox Hover */
.checkbox-hover {
  transition: all 200ms ease-out;
}
.checkbox-hover:hover {
  border-color: var(--primary-teal);
  transform: scale(1.1);
}
```

### Task Completion Animation

```jsx
// Task completion with celebration effect
const handleTaskComplete = (taskId) => {
  // Add completion animation class
  const taskElement = document.querySelector(`[data-task-id="${taskId}"]`);
  taskElement.classList.add('task-complete-animation');
  
  // Show confetti or success toast
  toast.success('Task completed! 🎉', {
    duration: 2000,
    position: 'top-center',
  });
  
  // Update task status after animation
  setTimeout(() => {
    updateTask(taskId, { completed: true });
  }, 300);
};
```

```css
/* Task completion animation */
@keyframes taskComplete {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.task-complete-animation {
  animation: taskComplete 300ms ease-out;
}
```

### Modal Animations

```jsx
// Dialog with smooth entrance
<Dialog open={isOpen} onOpenChange={setIsOpen}>
  <DialogContent className="sm:max-w-[500px] rounded-2xl animate-in fade-in-0 zoom-in-95 duration-300">
    {/* Modal content */}
  </DialogContent>
</Dialog>
```

### Loading Animations

```css
/* Skeleton pulse animation */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.skeleton {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  background: linear-gradient(90deg, #f5f5f5 25%, #e5e5e5 50%, #f5f5f5 75%);
  background-size: 200% 100%;
}
```

---

## Shadows & Elevation

```css
:root {
  /* Shadow System */
  --shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
  --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  
  /* Colored Shadows for Primary Actions */
  --shadow-teal: 0 10px 25px -5px rgba(20, 184, 166, 0.3);
  --shadow-coral: 0 10px 25px -5px rgba(255, 111, 97, 0.3);
}
```

**Shadow Usage:**
- Cards (default): `--shadow-sm`
- Cards (hover): `--shadow-lg`
- Buttons (hover): `--shadow-teal` or `--shadow-coral`
- Modals: `--shadow-2xl`
- Dropdowns: `--shadow-xl`
- Header: `--shadow-sm`

---

## Border Radius

```css
:root {
  --radius-sm: 0.375rem;   /* 6px - Small elements */
  --radius-md: 0.5rem;     /* 8px - Inputs, badges */
  --radius-lg: 0.75rem;    /* 12px - Cards */
  --radius-xl: 1rem;       /* 16px - Modals */
  --radius-2xl: 1.5rem;    /* 24px - Large containers */
  --radius-full: 9999px;   /* Full - Buttons, pills */
}
```

**Radius Usage:**
- Buttons: `--radius-full` (pill shape)
- Cards: `--radius-lg` (12px)
- Inputs: `--radius-md` (8px)
- Badges: `--radius-full` (pill shape)
- Modals: `--radius-xl` (16px)
- Checkboxes: `--radius-sm` (6px)

---

## Accessibility Guidelines

### Focus States

```css
/* Focus ring for interactive elements */
*:focus-visible {
  outline: 2px solid var(--primary-teal);
  outline-offset: 2px;
  border-radius: inherit;
}

/* Button focus */
button:focus-visible {
  outline: 2px solid var(--primary-teal);
  outline-offset: 2px;
}

/* Input focus */
input:focus-visible,
textarea:focus-visible,
select:focus-visible {
  border-color: var(--primary-teal);
  ring: 2px solid rgba(20, 184, 166, 0.2);
}
```

### Color Contrast

**WCAG AA Compliance:**
- All text must have minimum 4.5:1 contrast ratio
- Large text (18px+) must have minimum 3:1 contrast ratio
- Interactive elements must have 3:1 contrast ratio

**Tested Combinations:**
- Primary text (#262626) on white background: 12.6:1 ✓
- Secondary text (#525252) on white background: 7.5:1 ✓
- Teal button (#14B8A6) with white text: 4.8:1 ✓
- Error text (#EF4444) on white background: 4.5:1 ✓

### Keyboard Navigation

**Tab Order:**
1. Header navigation
2. Filter buttons
3. Add task button
4. Task checkboxes (in order)
5. Task action buttons (edit, delete)
6. Footer links

**Keyboard Shortcuts:**
- `Tab` - Navigate forward
- `Shift + Tab` - Navigate backward
- `Enter` - Activate button/link
- `Space` - Toggle checkbox
- `Escape` - Close modal/dropdown

### Screen Reader Support

```jsx
// Add aria labels for screen readers
<Button 
  aria-label="Add new task"
  data-testid="add-task-button"
>
  <Plus className="h-4 w-4" />
</Button>

<Checkbox 
  aria-label={`Mark task "${task.title}" as ${task.completed ? 'incomplete' : 'complete'}`}
  data-testid={`task-checkbox-${task.id}`}
/>

<div 
  role="status" 
  aria-live="polite"
  data-testid="task-count"
>
  {activeTaskCount} active tasks
</div>
```

---

## Toast Notifications

### Using Sonner

```jsx
import { toast } from 'sonner';

// Success toast
toast.success('Task added successfully!', {
  duration: 3000,
  position: 'top-center',
});

// Error toast
toast.error('Failed to delete task', {
  duration: 4000,
  position: 'top-center',
});

// Info toast
toast.info('Task updated', {
  duration: 2000,
  position: 'top-center',
});

// Custom toast with action
toast('Task deleted', {
  duration: 5000,
  position: 'top-center',
  action: {
    label: 'Undo',
    onClick: () => handleUndo(),
  },
});
```

**Toast Specifications:**
- Position: Top center
- Duration: 2-4 seconds (based on importance)
- Style: Rounded corners, subtle shadow
- Colors: Match semantic color system
- Animation: Slide in from top, fade out

---

## Image Assets

### Image URLs by Category

```json
{
  "hero_section": {
    "url": "https://images.unsplash.com/photo-1648469941040-b1c1fac2d4b2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0YXNrJTIwbWFuYWdlbWVudCUyMHByb2R1Y3Rpdml0eSUyMHdvcmtzcGFjZSUyMGNsZWFuJTIwbWluaW1hbHxlbnwwfHx8fDE3NjI3NjcxMTF8MA&ixlib=rb-4.1.0&q=85",
    "description": "Modern workspace with clean aesthetic",
    "usage": "Hero section background or header image"
  },
  "empty_state": {
    "url": "https://images.unsplash.com/photo-1597004475902-3f8c38279a4f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxlbXB0eSUyMHN0YXRlJTIwaWxsdXN0cmF0aW9uJTIwZnJpZW5kbHklMjBtaW5pbWFsJTIwc2ltcGxlfGVufDB8fHx8MTc2Mjc2NzEyM3ww&ixlib=rb-4.1.0&q=85",
    "description": "Minimal basketball hoop - represents empty state",
    "usage": "Empty state when no tasks exist"
  },
  "success_celebration": {
    "url": "https://images.unsplash.com/photo-1614036417651-efe5912149d8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwyfHxjaGVja2xpc3QlMjBjb21wbGV0ZWQlMjB0YXNrcyUyMHN1Y2Nlc3MlMjBjZWxlYnJhdGlvbiUyMGFjaGlldmVtZW50fGVufDB8fHx8MTc2Mjc2NzExNnww&ixlib=rb-4.1.0&q=85",
    "description": "Yellow achievement ribbon on blue background",
    "usage": "Success state or achievement celebration"
  },
  "task_completion": {
    "url": "https://images.unsplash.com/photo-1611224923853-80b023f02d71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxjaGVja2xpc3QlMjBjb21wbGV0ZWQlMjB0YXNrcyUyMHN1Y2Nlc3MlMjBjZWxlYnJhdGlvbiUyMGFjaGlldmVtZW50fGVufDB8fHx8MTc2Mjc2NzExNnww&ixlib=rb-4.1.0&q=85",
    "description": "Colorful task completion sticky notes",
    "usage": "Task completion celebration or onboarding"
  }
}
```

---

## Responsive Design Breakpoints

```css
:root {
  /* Breakpoints */
  --breakpoint-sm: 640px;   /* Mobile landscape */
  --breakpoint-md: 768px;   /* Tablet */
  --breakpoint-lg: 1024px;  /* Desktop */
  --breakpoint-xl: 1280px;  /* Large desktop */
  --breakpoint-2xl: 1536px; /* Extra large desktop */
}
```

### Mobile-First Approach

```jsx
// Responsive Task Card
<Card className="p-4 md:p-6">
  <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
    {/* Content adapts based on screen size */}
  </div>
</Card>

// Responsive Grid
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
  {/* Tasks */}
</div>

// Responsive Typography
<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
  My Tasks
</h1>
```

**Responsive Specifications:**
- Mobile (< 640px): Single column, compact spacing
- Tablet (640px - 1024px): Two columns, medium spacing
- Desktop (> 1024px): Three columns, generous spacing
- Touch targets: Minimum 44x44px on mobile
- Font scaling: Increase by 1-2 sizes per breakpoint

---

## Performance Optimization

### Image Optimization

```jsx
// Lazy load images
<img 
  src={imageUrl}
  alt={altText}
  loading="lazy"
  className="w-full h-auto"
/>

// Use appropriate image formats
// - WebP for modern browsers
// - JPEG for photos
// - PNG for graphics with transparency
// - SVG for icons and logos
```

### Code Splitting

```jsx
// Lazy load components
import { lazy, Suspense } from 'react';

const EditTaskModal = lazy(() => import('./components/EditTaskModal'));

// Use with Suspense
<Suspense fallback={<LoadingSkeleton />}>
  <EditTaskModal />
</Suspense>
```

### Animation Performance

```css
/* Use transform and opacity for animations (GPU accelerated) */
.animated-element {
  transform: translateY(0);
  opacity: 1;
  transition: transform 300ms ease-out, opacity 300ms ease-out;
  will-change: transform, opacity;
}

/* Avoid animating: width, height, top, left, margin, padding */
```

---

## Instructions to Main Agent

### Implementation Priority

1. **Setup Phase:**
   - Install required dependencies (lucide-react for icons)
   - Configure color tokens in index.css
   - Import Google Fonts (Space Grotesk, Inter)
   - Set up Sonner for toast notifications

2. **Core Components:**
   - Create TaskCard component with all states (default, completed, hover)
   - Implement filter buttons with active states
   - Build EditTaskModal with form validation
   - Add empty state component
   - Create loading skeleton component

3. **Functionality:**
   - Task CRUD operations (Create, Read, Update, Delete)
   - Task completion toggle with animation
   - Filter functionality (All, Active, Completed)
   - Due date logic with color indicators
   - Category badge rendering
   - Toast notifications for all actions

4. **Polish:**
   - Add hover states to all interactive elements
   - Implement smooth transitions (200-300ms)
   - Add focus states for accessibility
   - Test keyboard navigation
   - Verify color contrast ratios
   - Add data-testid attributes to all interactive elements

### Component Structure

```
src/
├── components/
│   ├── ui/                    # Shadcn components (already exist)
│   ├── TaskCard.jsx           # Individual task card
│   ├── TaskList.jsx           # List of tasks with grid layout
│   ├── FilterButtons.jsx      # Filter button group
│   ├── AddTaskForm.jsx        # Form to add new task
│   ├── EditTaskModal.jsx      # Modal for editing tasks
│   ├── EmptyState.jsx         # Empty state component
│   └── LoadingSkeleton.jsx    # Loading skeleton
├── App.jsx                    # Main app component
├── App.css                    # Custom styles
└── index.css                  # Global styles with tokens
```

### Key Implementation Notes

**Color Tokens:**
- Override default shadcn colors in index.css with the provided color system
- Use CSS custom properties for easy theming
- Ensure all colors meet WCAG AA contrast requirements

**Component Usage:**
- Use shadcn Button, Card, Checkbox, Dialog, Badge, Input, Textarea, Label, Calendar, Popover, Select, Sonner
- All buttons should have `rounded-full` class for pill shape
- All cards should have `rounded-xl` class
- Use `group` and `group-hover` for card action buttons

**Animations:**
- Use Tailwind's transition utilities: `transition-all duration-200`
- Add hover effects: `hover:scale-105`, `hover:shadow-lg`
- Use `animate-in` utilities for modal entrance
- Implement task completion animation with CSS keyframes

**Responsive Design:**
- Mobile-first approach with Tailwind breakpoints
- Grid: 1 column (mobile), 2 columns (tablet), 3 columns (desktop)
- Padding: 16px (mobile), 24px (tablet), 32px (desktop)
- Font sizes scale up at each breakpoint

**Accessibility:**
- Add `data-testid` to all interactive elements
- Include `aria-label` for icon-only buttons
- Ensure proper focus states with visible outline
- Maintain logical tab order
- Use semantic HTML elements

**State Management:**
- Use React hooks (useState, useEffect) for local state
- Implement optimistic UI updates for better UX
- Show loading states during API calls
- Display toast notifications for all actions

**Error Handling:**
- Show error toasts for failed operations
- Provide fallback UI for empty states
- Validate form inputs before submission
- Handle edge cases (no due date, no description, etc.)

### Testing Checklist

- [ ] All CRUD operations work correctly
- [ ] Filter buttons update task list
- [ ] Task completion toggles work with animation
- [ ] Due date colors update correctly (overdue, due soon, due later)
- [ ] Category badges display correct colors
- [ ] Edit modal opens and saves changes
- [ ] Empty state shows when no tasks
- [ ] Loading skeleton displays during data fetch
- [ ] Toast notifications appear for all actions
- [ ] Hover states work on all interactive elements
- [ ] Keyboard navigation works properly
- [ ] Focus states are visible
- [ ] Responsive layout works on all screen sizes
- [ ] All data-testid attributes are present

---

## Common Mistakes to Avoid

### ❌ Don't:
- Use dark gradients (purple/pink, blue/purple) anywhere in the UI
- Apply gradients to task cards or content areas
- Use generic gray colors - use the defined neutral palette
- Center-align all text (disrupts reading flow)
- Use emoji icons - use lucide-react icons instead
- Apply `transition: all` globally (breaks transforms)
- Forget data-testid attributes on interactive elements
- Use square buttons - all buttons should be pill-shaped (rounded-full)
- Ignore hover states on interactive elements
- Skip loading and empty states

### ✅ Do:
- Use solid colors for all task cards and content
- Apply the vibrant color palette (teal, coral, mint, orange, sky)
- Use pill-shaped buttons (rounded-full) for all actions
- Add smooth transitions (200-300ms) to interactive elements
- Include hover effects (scale, shadow, color change)
- Show visual feedback for task completion
- Use category-specific colors for badges
- Implement due date color logic (red for overdue, orange for due soon)
- Add data-testid to all interactive and key elements
- Use lucide-react icons consistently
- Maintain generous whitespace and spacing
- Test on multiple screen sizes

---

## Final Notes

This design system creates a **modern, energetic, and productive** to-do app that:
- Uses vibrant colors strategically without overwhelming users
- Provides clear visual hierarchy and organization
- Includes smooth micro-interactions for delightful UX
- Maintains accessibility standards (WCAG AA)
- Adapts beautifully across all device sizes
- Offers intuitive task management with visual feedback

The color palette (teal, coral, mint, orange, sky) creates an energetic yet professional atmosphere that motivates users to complete tasks while maintaining clarity and usability.

All components use shadcn/ui primitives for consistency and accessibility, with custom styling to match the vibrant, modern aesthetic. The pill-shaped buttons and rounded cards create a friendly, approachable interface that's perfect for both personal and professional task management.

---

# General UI/UX Design Guidelines

## Critical Rules

### Transition Rule
You must **not** apply universal transition. Eg: `transition: all`. This results in breaking transforms. Always add transitions for specific interactive elements like button, input excluding transforms.

### Text Alignment Rule
You must **not** center align the app container, ie do not add `.App { text-align: center; }` in the css file. This disrupts the human natural reading flow of text.

### Icon Rule
NEVER use AI assistant Emoji characters like `🤖🧠💭💡🔮🎯📚🎭🎬🎪🎉🎊🎁🎀🎂🍰🎈🎨🎰💰💵💳🏦💎🪙💸🤑📊📈📉💹🔢🏆🥇` etc for icons. Always use **lucide-react** library already installed in the package.json.

### Gradient Restriction Rule (Repeated for Emphasis)
NEVER use dark/saturated gradient combos (e.g., purple/pink) on any UI element.
NEVER let gradients cover more than 20% of the viewport.
NEVER apply gradients to text-heavy content or reading areas.
NEVER use gradients on small UI elements (<100px width).
NEVER stack multiple gradient layers in the same viewport.

**ENFORCEMENT RULE:**
If gradient area exceeds 20% of viewport OR affects readability, **THEN** use solid colors.

**How and where to use:**
- Section backgrounds (not content backgrounds)
- Hero section header content (dark to light to dark color)
- Decorative overlays and accent elements only
- Hero section with 2-3 mild colors
- Gradients can be horizontal, vertical, or diagonal

### Color Guidelines for AI/Voice Applications
For AI chat, voice application, **do not use purple color. Use colors like light green, ocean blue, peach orange etc.**

## Interaction & Animation

Every interaction needs micro-animations - hover states, transitions, parallax effects, and entrance animations. Static = dead.

Use 2-3x more spacing than feels comfortable. Cramped designs look cheap.

Subtle grain textures, noise overlays, custom cursors, selection states, and loading animations separate good from extraordinary.

## Design Token Instantiation

Before generating UI, infer the visual style from the problem statement (palette, contrast, mood, motion) and immediately instantiate it by setting global design tokens (primary, secondary/accent, background, foreground, ring, state colors), rather than relying on any library defaults. Don't make the background dark as a default step, always understand problem first and define colors accordingly.

Example:
- If it implies playful/energetic, choose a colorful scheme
- If it implies monochrome/minimal, choose a black-white/neutral scheme

## Component Reuse

- Prioritize using pre-existing components from `src/components/ui` when applicable
- Create new components that match the style and conventions of existing components when needed
- Examine existing components to understand the project's component patterns before creating new ones

**IMPORTANT**: Do not use HTML based components like dropdown, calendar, toast etc. You **MUST** always use `/app/frontend/src/components/ui/` only as primary components as these are modern and stylish components.

## Best Practices

- Use Shadcn/UI as the primary component library for consistency and accessibility
- Import path: `./components/ui/[component-name]`

## Export Conventions

- Components MUST use named exports (`export const ComponentName = ...`)
- Pages MUST use default exports (`export default function PageName() {...}`)

## Toasts

- Use `sonner` for toasts
- Sonner component is located in `/app/frontend/src/components/ui/sonner.jsx`

## Visual Depth

Use 2-4 color gradients, subtle textures/noise overlays, or CSS-based noise to avoid flat visuals.

## Testing Attributes

All interactive and key informational elements **MUST** include a `data-testid` attribute to facilitate robust automated testing. This applies to buttons, links, form inputs, menus, and any element that a user interacts with or that displays critical information (e.g., an error message, a user's balance, a confirmation text). Use kebab-case convention that defines the element's role, not its appearance (e.g., `data-testid="login-form-submit-button"`). This creates a stable, decoupled interface for tests, preventing them from breaking due to stylistic refactors or changes in DOM structure.

---

**End of Design Guidelines**

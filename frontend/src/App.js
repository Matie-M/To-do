import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Toaster, toast } from 'sonner';
import { Plus, ListTodo } from 'lucide-react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import FilterBar from './components/FilterBar';
import EditModal from './components/EditModal';
import EmptyState from './components/EmptyState';
import './App.css';

const API_URL = process.env.REACT_APP_BACKEND_URL;

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');
  const [editingTask, setEditingTask] = useState(null);
  const [showTaskForm, setShowTaskForm] = useState(false);

  // Fetch tasks
  const fetchTasks = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      params.append('status', filterStatus);
      if (filterCategory !== 'all') {
        params.append('category', filterCategory);
      }
      
      const response = await axios.get(`${API_URL}/api/tasks?${params.toString()}`);
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
      toast.error('Failed to load tasks');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [filterStatus, filterCategory]);

  // Create task
  const handleCreateTask = async (taskData) => {
    try {
      await axios.post(`${API_URL}/api/tasks`, taskData);
      toast.success('Task created successfully!');
      fetchTasks();
      setShowTaskForm(false);
    } catch (error) {
      console.error('Error creating task:', error);
      toast.error('Failed to create task');
      throw error;
    }
  };

  // Update task
  const handleUpdateTask = async (taskId, taskData) => {
    try {
      await axios.put(`${API_URL}/api/tasks/${taskId}`, taskData);
      toast.success('Task updated successfully!');
      fetchTasks();
      setEditingTask(null);
    } catch (error) {
      console.error('Error updating task:', error);
      toast.error('Failed to update task');
      throw error;
    }
  };

  // Toggle task completion
  const handleToggleTask = async (taskId) => {
    try {
      await axios.patch(`${API_URL}/api/tasks/${taskId}/toggle`);
      fetchTasks();
    } catch (error) {
      console.error('Error toggling task:', error);
      toast.error('Failed to update task');
    }
  };

  // Delete task
  const handleDeleteTask = async (taskId) => {
    try {
      await axios.delete(`${API_URL}/api/tasks/${taskId}`);
      toast.success('Task deleted successfully!');
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
      toast.error('Failed to delete task');
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <Toaster position="top-right" richColors />
      
      {/* Header */}
      <header className="bg-white border-b border-neutral-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-teal-500 rounded-xl flex items-center justify-center">
                <ListTodo className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-neutral-800 font-heading">TaskFlow</h1>
            </div>
            <button
              onClick={() => setShowTaskForm(!showTaskForm)}
              className="btn-primary flex items-center gap-2"
              data-testid="add-task-button"
            >
              <Plus className="w-5 h-5" />
              <span className="hidden sm:inline">Add Task</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Task Form */}
        {showTaskForm && (
          <div className="mb-8">
            <TaskForm 
              onSubmit={handleCreateTask}
              onCancel={() => setShowTaskForm(false)}
            />
          </div>
        )}

        {/* Filter Bar */}
        <FilterBar
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
          filterCategory={filterCategory}
          setFilterCategory={setFilterCategory}
        />

        {/* Task List */}
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500"></div>
          </div>
        ) : tasks.length === 0 ? (
          <EmptyState filterStatus={filterStatus} />
        ) : (
          <TaskList
            tasks={tasks}
            onToggle={handleToggleTask}
            onEdit={setEditingTask}
            onDelete={handleDeleteTask}
          />
        )}
      </main>

      {/* Edit Modal */}
      {editingTask && (
        <EditModal
          task={editingTask}
          onClose={() => setEditingTask(null)}
          onSave={handleUpdateTask}
        />
      )}
    </div>
  );
}

export default App;
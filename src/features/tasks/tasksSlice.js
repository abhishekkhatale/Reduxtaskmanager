import { createSlice } from '@reduxjs/toolkit';

const loadTasksFromLocalStorage = () => {
  const savedTasks = localStorage.getItem('tasks');
  return savedTasks ? JSON.parse(savedTasks) : [];
};

const saveTasksToLocalStorage = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const initialState = {
  tasks: loadTasksFromLocalStorage(),
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      saveTasksToLocalStorage(state.tasks);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
      saveTasksToLocalStorage(state.tasks);
    },
    toggleComplete: (state, action) => {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
        saveTasksToLocalStorage(state.tasks);
      }
    },
  },
});

export const { addTask, deleteTask, toggleComplete } = tasksSlice.actions;
export default tasksSlice.reducer;
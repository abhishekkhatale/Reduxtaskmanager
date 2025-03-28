import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './tasksSlice';
import { FaPlus } from 'react-icons/fa';

const TaskForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [time, setTime] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newTask = {
      id: Date.now(),
      name,
      description,
      time,
      completed: false,
    };

    dispatch(addTask(newTask));
    setName('');
    setDescription('');
    setTime('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Task Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black"
            placeholder="Enter task name"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium mb-1">
            Description
          </label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black"
            placeholder="Enter description"
          />
        </div>
        <div>
          <label htmlFor="time" className="block text-sm font-medium mb-1">
            Time
          </label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>
        <div className="flex items-end">
          <button
            type="submit"
            className="w-full md:w-auto px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition flex items-center justify-center gap-2"
          >
            <FaPlus /> Add Task
          </button>
        </div>
      </div>
    </form>
  );
};

export default TaskForm;
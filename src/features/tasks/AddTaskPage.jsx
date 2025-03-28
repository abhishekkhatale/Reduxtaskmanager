import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './tasksSlice';
import { FaPlus } from 'react-icons/fa';

const AddTaskPage = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [time, setTime] = useState('');
  const [isAm, setIsAm] = useState(true); // true for AM, false for PM
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    // Format time with AM/PM
    let formattedTime = '';
    if (time) {
      const [hours, minutes] = time.split(':');
      let hoursNum = parseInt(hours, 10);
      
      if (!isAm && hoursNum < 12) {
        hoursNum += 12;
      } else if (isAm && hoursNum === 12) {
        hoursNum = 0;
      }
      
      formattedTime = `${hoursNum.toString().padStart(2, '0')}:${minutes} ${isAm ? 'AM' : 'PM'}`;
    }

    const newTask = {
      id: Date.now(),
      name,
      description,
      time: formattedTime,
      completed: false,
    };

    dispatch(addTask(newTask));
    setName('');
    setDescription('');
    setTime('');
    setIsAm(true);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6">Add New Task</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Task Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
            placeholder="Enter task name"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium mb-1">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
            placeholder="Enter description"
            rows="3"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="time" className="block text-sm font-medium mb-1">
              Time
            </label>
            <input
              type="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              AM/PM
            </label>
            <div className="flex border border-gray-300 rounded-lg overflow-hidden">
              <button
                type="button"
                className={`flex-1 py-3 ${isAm ? 'bg-black text-white' : 'bg-gray-100'}`}
                onClick={() => setIsAm(true)}
              >
                AM
              </button>
              <button
                type="button"
                className={`flex-1 py-3 ${!isAm ? 'bg-black text-white' : 'bg-gray-100'}`}
                onClick={() => setIsAm(false)}
              >
                PM
              </button>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition flex items-center justify-center gap-2"
        >
          <FaPlus /> Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTaskPage;
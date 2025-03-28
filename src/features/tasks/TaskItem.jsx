import { useDispatch } from 'react-redux';
import { deleteTask, toggleComplete } from './tasksSlice';
import { FaTrash, FaCheck, FaUndo } from 'react-icons/fa';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between p-3 border-b border-gray-200">
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <button
          onClick={() => dispatch(toggleComplete(task.id))}
          className={`flex-shrink-0 p-2 rounded-full ${task.completed ? 'bg-gray-800 text-white' : 'border border-gray-300'}`}
          aria-label={task.completed ? 'Mark as incomplete' : 'Mark as complete'}
        >
          {task.completed ? <FaUndo size={12} /> : <FaCheck size={12} />}
        </button>
        <div className="flex-1 min-w-0 overflow-hidden">
          <h3 className={`font-medium truncate ${task.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
            {task.name}
          </h3>
          {task.description && (
            <p className={`text-xs break-words ${task.completed ? 'text-gray-400' : 'text-gray-600'}`}>
              {task.description}
            </p>
          )}
          {task.time && (
            <p className={`text-xs mt-1 ${task.completed ? 'text-gray-400' : 'text-gray-500'}`}>
              {task.time}
            </p>
          )}
        </div>
      </div>
      <button
        onClick={() => dispatch(deleteTask(task.id))}
        className="flex-shrink-0 p-2 text-gray-500 hover:text-red-500 transition"
        aria-label="Delete task"
      >
        <FaTrash size={14} />
      </button>
    </div>
  );
};

export default TaskItem;
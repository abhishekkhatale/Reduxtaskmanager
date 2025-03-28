import { Link, useLocation } from 'react-router-dom';
import { FaPlus, FaList, FaCheckCircle } from 'react-icons/fa';

const BottomNav = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
      <div className="flex justify-around max-w-md mx-auto">
        <Link
          to="/"
          className={`flex flex-col items-center p-3 ${location.pathname === '/add' ? 'text-black' : 'text-gray-500'}`}
        >
          <FaPlus size={18} />
          <span className="text-xs mt-1">Add Task</span>
        </Link>
        <Link
          to="/pending"
          className={`flex flex-col items-center p-3 ${location.pathname === '/pending' ? 'text-black' : 'text-gray-500'}`}
        >
          <FaList size={18} />
          <span className="text-xs mt-1">Pending</span>
        </Link>
        <Link
          to="/completed"
          className={`flex flex-col items-center p-3 ${location.pathname === '/completed' ? 'text-black' : 'text-gray-500'}`}
        >
          <FaCheckCircle size={18} />
          <span className="text-xs mt-1">Completed</span>
        </Link>
      </div>
    </nav>
  );
};

export default BottomNav;
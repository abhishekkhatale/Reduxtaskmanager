import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

const PendingTasksPage = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const pendingTasks = tasks.filter((task) => !task.completed);

  return (
    <div className="max-w-md mx-auto">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Pending Tasks</h1>
        {pendingTasks.length > 0 ? (
          <div className="bg-white rounded-lg shadow divide-y divide-gray-200">
            {pendingTasks.map((task) => (
              <TaskItem key={task.id} task={task} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center py-8">No pending tasks</p>
        )}
      </div>
    </div>
  );
};

export default PendingTasksPage;
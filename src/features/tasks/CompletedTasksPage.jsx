import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

const CompletedTasksPage = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className="max-w-md mx-auto">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Completed Tasks</h1>
        {completedTasks.length > 0 ? (
          <div className="bg-white rounded-lg shadow divide-y divide-gray-200">
            {completedTasks.map((task) => (
              <TaskItem key={task.id} task={task} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center py-8">No completed tasks</p>
        )}
      </div>
    </div>
  );
};

export default CompletedTasksPage;
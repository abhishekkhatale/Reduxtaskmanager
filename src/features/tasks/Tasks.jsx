import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

const Tasks = () => {
  const tasks = useSelector((state) => state.tasks.tasks);

  const pendingTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-bold mb-4">Pending Tasks ({pendingTasks.length})</h2>
        {pendingTasks.length > 0 ? (
          <div className="bg-white rounded-lg shadow divide-y divide-gray-200">
            {pendingTasks.map((task) => (
              <TaskItem key={task.id} task={task} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center py-4">No pending tasks</p>
        )}
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Completed Tasks ({completedTasks.length})</h2>
        {completedTasks.length > 0 ? (
          <div className="bg-white rounded-lg shadow divide-y divide-gray-200">
            {completedTasks.map((task) => (
              <TaskItem key={task.id} task={task} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center py-4">No completed tasks</p>
        )}
      </div>
    </div>
  );
};

export default Tasks;
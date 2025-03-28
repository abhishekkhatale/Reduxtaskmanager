import { Provider } from 'react-redux';
import { store } from './app/store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddTaskPage from './features/tasks/AddTaskPage';
import PendingTasksPage from './features/tasks/PendingTasksPage';
import CompletedTasksPage from './features/tasks/CompletedTasksPage';
import BottomNav from './features/tasks/BottomNav';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-white pt-6 pb-16">
          <Routes>
            
            <Route path="/" element={<AddTaskPage />} />
            <Route path="/add" element={<AddTaskPage />} />
            <Route path="/pending" element={<PendingTasksPage />} />
            <Route path="/completed" element={<CompletedTasksPage />} />
          </Routes>
          <BottomNav />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
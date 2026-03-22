import { useState } from 'react';
import API from '../services/api';

function TaskForm({ fetchTasks }) {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('medium');

  const addTask = async () => {
    if (!title.trim()) return;

    await API.post('/', { title, priority });
    setTitle('');
    fetchTasks();
  };

  return (
    <div className="form">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task..."
      />

      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <button className="add-btn" onClick={addTask}>
        Add
      </button>
    </div>
  );
}

export default TaskForm;
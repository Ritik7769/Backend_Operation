import API from '../services/api';

function TaskItem({ task, fetchTasks }) {

  const toggleTask = async () => {
    await API.put(`/${task.id}`, {
      title: task.title,
      status: task.status === 'pending' ? 'completed' : 'pending'
    });
    fetchTasks();
  };

  const deleteTask = async () => {
    await API.delete(`/${task.id}`);
    fetchTasks();
  };

  return (
    <div className={`task ${task.status === 'completed' ? 'completed' : ''}`}>
      <span>
        {task.title}
        <span className={`priority ${task.priority}`}>
          {task.priority}
        </span>
      </span>

      <div className="actions">
        <button className="complete-btn" onClick={toggleTask}>✔</button>
        <button className="delete-btn" onClick={deleteTask}>❌</button>
      </div>
    </div>
  );
}

export default TaskItem;
const db = require('../config/db');

exports.getTasks = (callback) => {
  db.query('SELECT * FROM tasks ORDER BY id DESC', callback);
};

exports.addTask = (data, callback) => {
  const sql = 'INSERT INTO tasks (title, priority) VALUES (?, ?)';
  db.query(sql, [data?.title, data?.priority], callback);
};

exports.updateTask = (id, data, callback) => {
  const sql = 'UPDATE tasks SET title=?, status=? WHERE id=?';
  db.query(sql, [data.title, data?.status, id], callback);
};

exports.deleteTask = (id, callback) => {
  db.query('DELETE FROM tasks WHERE id=?', [id], callback);
};
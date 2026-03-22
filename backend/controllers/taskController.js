const taskModel = require('../models/taskModel');

exports.getAllTasks = (req, res) => {
  taskModel.getTasks((err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

exports.createTask = (req, res) => {
  taskModel.addTask(req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Task Added' });
  });
};

exports.updateTask = (req, res) => {
  taskModel.updateTask(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Task Updated' });
  });
};

exports.deleteTask = (req, res) => {
  taskModel.deleteTask(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Task Deleted' });
  });
};
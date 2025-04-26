import Task from "../models/Task";
import User from "../models/User";
const getTasks = async (req, res) => {
  const role = req.user.role;
  const userId = req.user.id;

  if (role === "admin") {
    const tasks = await Task.find().populate("assignee", "email name");
    return res.json(tasks);
  }

  const tasks = await Task.find({ assignee: userId }).populate(
    "assignee",
    "email name"
  );
  res.json(tasks);
};

const createTask = async (req, res) => {
  const {
    title,
    assignee,
    dueDate,
    estimatedTime,
    category,
    priority,
    description,
    status,
    progress,
  } = req.body;
  const attachments = req.files.map((file) => `/uploads/${file.filename}`);

  const task = new Task({
    title,
    assignee,
    dueDate,
    estimatedTime,
    category,
    priority,
    description,
    status,
    progress,
    attachments,
  });

  await task.save();
  res.status(201).json(task);
};

module.exports = { getTasks, createTask };

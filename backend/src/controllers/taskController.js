import Task from "../models/Task.js";
import User from "../models/User.js";

const getTasks = async (req, res) => {
  try {
    const role = req.user.role;
    const userId = req.user.id;

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    let tasks;
    if (role === "admin") {
      tasks = await Task.find()
        .populate("assignee", "email name")
        .skip(skip)
        .limit(limit);
    } else {
      tasks = await Task.find({ assignee: userId })
        .populate("assignee", "email name")
        .skip(skip)
        .limit(limit);
    }

    const totalTasks = await Task.countDocuments(role === "admin" ? {} : { assignee: userId });
    res.json({ tasks, totalTasks, page, totalPages: Math.ceil(totalTasks / limit) });
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).json({ message: "Failed to fetch tasks", error });
  }
};

const createTask = async (req, res) => {
  try {
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

    // Validate required fields
    if (!title || !assignee || !dueDate) {
      return res.status(400).json({ message: "Title, Assignee, and Due Date are required." });
    }

    // Role-based access control
    if (req.user.role !== "admin" && req.user.id !== assignee) {
      return res.status(403).json({ message: "You are not authorized to assign tasks to others." });
    }

    // Handle file uploads
    const attachments = req.files ? req.files.map((file) => `/uploads/${file.filename}`) : [];

    // Create a new task
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
      createdBy: req.user.id,
    });

    await task.save();
    res.status(201).json({ message: "Task created successfully", task });
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(500).json({ message: "Failed to create task", error });
  }
};

export { getTasks, createTask };
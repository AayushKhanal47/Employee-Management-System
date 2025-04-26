import express from "express";
import multer from "multer";
import path from "path";

import Task from "../models/Task.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

router.get("/", async (req, res) => {
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
});

router.post("/", upload.array("attachments"), async (req, res) => {
  const {
    title,
    assignee,
    dueDate,
    estimatedTime,
    category,
    priority,
    description,
    status,
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
    attachments,
  });

  await task.save();
  res.status(201).json(task);
});

export default router;

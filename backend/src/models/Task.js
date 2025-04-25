import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    assignee: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    dueDate: { type: String },
    estimatedTime: { type: String },
    category: {
      type: String,
      enum: ["design", "development", "marketing", "research"],
      default: "development",
    },
    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Medium",
    },
    description: { type: String },
    attachments: [{ type: String }], 
    progress: { type: Number, default: 0 }, 
    status: {
      type: String,
      enum: ["Pending", "In Progress", "Completed", "Failed", "In Review", "Accepted", "Draft"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);

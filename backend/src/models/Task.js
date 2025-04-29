import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    assignee: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    startDate: { type: Date },
    dueDate: { type: Date },
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
    tags: [{ type: String }],
    attachments: [
      {
        type: String,
        validate: {
          validator: function (v) {
            return /\.(jpg|jpeg|png|pdf|doc|docx)$/i.test(v); // Allow only specific file types
          },
          message: (props) => `${props.value} is not a valid file type!`,
        },
      },
    ],
    progress: { type: Number, default: 0, min: 0, max: 100 },
    status: {
      type: String,
      enum: ["Pending", "In Progress", "Completed", "Failed", "In Review", "Accepted", "Draft"],
      default: "Pending",
    },
    comments: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        comment: { type: String },
        createdAt: { type: Date, default: Date.now },
      },
    ],
    isArchived: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("Task", taskSchema);
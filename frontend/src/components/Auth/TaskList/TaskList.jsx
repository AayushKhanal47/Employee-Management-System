import React, { useState } from "react";
import {
  Calendar,
  Clock,
  AlertTriangle,
  MoreVertical,
  CheckCircle,
} from "lucide-react";

const tasks = [
  {
    id: 1,
    title: "Complete Report",
    priority: "High",
    date: "6 March 2025",
    color: "from-red-500 to-red-600",
    description: "Finish quarterly sales report with updated projections",
    progress: 70,
  },
  {
    id: 2,
    title: "Team Meeting",
    priority: "Medium",
    date: "8 March 2025",
    color: "from-blue-500 to-blue-600",
    description: "Weekly sync with engineering team about roadmap",
    progress: 0,
  },
  {
    id: 3,
    title: "Code Review",
    priority: "Low",
    date: "10 March 2025",
    color: "from-green-500 to-green-600",
    description: "Review pull requests for the new authentication feature",
    progress: 25,
  },
  {
    id: 4,
    title: "Submit Proposal",
    priority: "High",
    date: "12 March 2025",
    color: "from-orange-500 to-orange-600",
    description: "Prepare and submit project proposal to the client",
    progress: 45,
  },
  {
    id: 5,
    title: "UI Design Updates",
    priority: "Medium",
    date: "14 March 2025",
    color: "from-purple-500 to-purple-600",
    description: "Implement design system changes to the dashboard",
    progress: 90,
  },
];

const getPriorityIcon = (priority) => {
  switch (priority) {
    case "High":
      return <AlertTriangle size={16} className="mr-1" />;
    case "Medium":
      return <Clock size={16} className="mr-1" />;
    case "Low":
      return <CheckCircle size={16} className="mr-1" />;
    default:
      return null;
  }
};

const TaskList = () => {
  const [activeTaskId, setActiveTaskId] = useState(null);

  return (
    <div className="mt-6 mb-8">
      <div className="flex justify-between items-center mb-4 px-4">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">
          Upcoming Tasks
        </h2>
        <button className="text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
          View All
        </button>
      </div>

      <div className="h-80 overflow-x-auto flex items-center gap-5 px-4 py-2 scrollbar-thin scrollbar-thumb-gray-600">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`flex-shrink-0 w-72 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 ${
              activeTaskId === task.id ? "ring-2 ring-blue-500" : ""
            }`}
            onClick={() =>
              setActiveTaskId(task.id === activeTaskId ? null : task.id)
            }
          >
            <div className={`h-2 bg-gradient-to-r ${task.color}`} />

            <div className="p-5">
              <div className="flex justify-between items-center">
                <div
                  className={`flex items-center text-xs font-medium px-2.5 py-1 rounded-full ${
                    task.priority === "High"
                      ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                      : task.priority === "Medium"
                      ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                      : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                  }`}
                >
                  {getPriorityIcon(task.priority)}
                  {task.priority}
                </div>
                <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                  <MoreVertical size={18} />
                </button>
              </div>

              <h2 className="mt-3 text-lg font-bold text-gray-900 dark:text-white">
                {task.title}
              </h2>

              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                {task.description}
              </p>

              <div className="mt-4">
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                  <span>Progress</span>
                  <span>{task.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                  <div
                    className={`h-2 rounded-full bg-gradient-to-r ${task.color}`}
                    style={{ width: `${task.progress}%` }}
                  />
                </div>
              </div>

              <div className="mt-4 flex items-center text-xs text-gray-500 dark:text-gray-400">
                <Calendar size={14} className="mr-1" />
                <span>{task.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;

import React, { useState } from "react";
import {
  CheckCircle,
  Clock,
  ClipboardCheck,
  XCircle,
  Hourglass,
  Filter,
  Search,
} from "lucide-react";

const tasks = [
  {
    id: 1,
    assignee: "Aayush",
    title: "Design Homepage UI",
    status: "In Progress",
    color: "bg-gradient-to-r from-indigo-500 to-purple-600",
    icon: <Hourglass className="text-white" size={18} />,
  },
  {
    id: 2,
    assignee: "Sujan",
    title: "Fix Login Bug",
    status: "Pending",
    color: "bg-gradient-to-r from-amber-400 to-orange-500",
    icon: <Clock className="text-white" size={18} />,
  },
  {
    id: 3,
    assignee: "Pratik",
    title: "Optimize Database Queries",
    status: "Completed",
    color: "bg-gradient-to-r from-emerald-400 to-green-600",
    icon: <CheckCircle className="text-white" size={18} />,
  },
  {
    id: 4,
    assignee: "Bishal",
    title: "Test Payment Gateway",
    status: "Failed",
    color: "bg-gradient-to-r from-rose-400 to-red-600",
    icon: <XCircle className="text-white" size={18} />,
  },
  {
    id: 5,
    assignee: "Sita",
    title: "Write API Documentation",
    status: "In Review",
    color: "bg-gradient-to-r from-sky-400 to-blue-600",
    icon: <ClipboardCheck className="text-white" size={18} />,
  },
];

const TaskDashboard = () => {
  const [filter, setFilter] = useState("All");
  const statusOptions = [
    "All",
    "In Progress",
    "Pending",
    "Completed",
    "Failed",
    "In Review",
  ];

  const filteredTasks =
    filter === "All" ? tasks : tasks.filter((task) => task.status === filter);

  return (
    <div className="bg-gray-900 min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Team Tasks</h1>
          <p className="text-gray-400">
            Track your team's progress and manage workflows
          </p>
        </header>

        <div className="bg-gray-800 p-5 rounded-xl mb-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="relative w-full md:w-64">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search tasks..."
              className="w-full bg-gray-700 text-white pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto">
            <Filter className="text-gray-400" size={18} />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="bg-gray-700 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {statusOptions.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="bg-gray-800 p-5 rounded-xl shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-white">
              Active Tasks ({filteredTasks.length})
            </h2>
            <div className="bg-blue-600 hover:bg-blue-700 transition-colors px-4 py-2 rounded-lg text-white font-medium cursor-pointer">
              + New Task
            </div>
          </div>

          <div className="h-96 overflow-auto pr-2 custom-scrollbar">
            {filteredTasks.length > 0 ? (
              filteredTasks.map((task) => (
                <div
                  key={task.id}
                  className={`${task.color} mb-4 py-4 px-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 rounded-lg hover:translate-x-1 hover:shadow-xl transition-all duration-200 cursor-pointer`}
                >
                  <div className="flex flex-col">
                    <h2 className="font-semibold text-white text-lg mb-1">
                      {task.title}
                    </h2>
                    <span className="text-white/80 text-sm">
                      Assigned to: {task.assignee}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-full text-sm font-medium text-white self-start sm:self-auto">
                    {task.icon}
                    <span>{task.status}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-10 text-gray-400">
                No tasks match the current filter
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {statusOptions.slice(1).map((status) => {
            const count = tasks.filter((t) => t.status === status).length;
            const getColor = (status) => {
              switch (status) {
                case "In Progress":
                  return "bg-indigo-600";
                case "Pending":
                  return "bg-amber-500";
                case "Completed":
                  return "bg-emerald-500";
                case "Failed":
                  return "bg-rose-500";
                case "In Review":
                  return "bg-sky-500";
                default:
                  return "bg-gray-600";
              }
            };

            return (
              <div
                key={status}
                className={`${getColor(status)} rounded-lg p-4 text-center`}
              >
                <p className="text-white font-medium">{status}</p>
                <p className="text-white text-2xl font-bold">{count}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TaskDashboard;

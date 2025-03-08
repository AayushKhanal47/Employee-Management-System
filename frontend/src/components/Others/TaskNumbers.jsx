import React from "react";
import {
  CheckCircle,
  Clock,
  ClipboardCheck,
  XCircle,
  ChevronUp,
} from "lucide-react";

function TaskNumbers() {
  const taskStats = [
    {
      title: "New Tasks",
      count: 12,
      icon: <Clock size={28} />,
      color: "bg-gradient-to-br from-blue-500 to-indigo-600",
      change: "+3",
      changeType: "increase",
    },
    {
      title: "Completed Tasks",
      count: 48,
      icon: <CheckCircle size={28} />,
      color: "bg-gradient-to-br from-emerald-400 to-green-600",
      change: "+7",
      changeType: "increase",
    },
    {
      title: "Accepted Tasks",
      count: 36,
      icon: <ClipboardCheck size={28} />,
      color: "bg-gradient-to-br from-amber-400 to-orange-500",
      change: "+5",
      changeType: "increase",
    },
    {
      title: "Failed Tasks",
      count: 4,
      icon: <XCircle size={28} />,
      color: "bg-gradient-to-br from-rose-400 to-pink-600",
      change: "-2",
      changeType: "decrease",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {taskStats.map((stat, index) => (
        <div
          key={index}
          className={`${stat.color} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
        >
          <div className="p-6 h-full flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-white/20 p-3 rounded-xl">{stat.icon}</div>
              <div
                className={`flex items-center ${
                  stat.changeType === "increase"
                    ? "text-green-200"
                    : "text-red-200"
                } text-sm font-medium`}
              >
                {stat.changeType === "increase" ? (
                  <ChevronUp size={16} />
                ) : null}
                <span>{stat.change}</span>
              </div>
            </div>

            <div className="mt-auto">
              <h2 className="text-3xl font-bold text-white mb-1">
                {stat.count}
              </h2>
              <div className="flex justify-between items-end">
                <h3 className="text-md font-medium text-white/90">
                  {stat.title}
                </h3>
                <div className="text-xs text-white/70">this week</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskNumbers;

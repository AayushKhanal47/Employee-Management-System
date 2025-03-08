import React, { useState } from "react";
import {
  Calendar,
  Users,
  Tag,
  Clock,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

const CreateTask = () => {
  const [priority, setPriority] = useState("Medium");

  return (
    <div className="p-8 bg-gray-900 rounded-2xl shadow-xl border border-gray-800">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Create New Task</h2>
        <div className="flex space-x-2">
          <button className="px-4 py-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 transition text-sm font-medium">
            Cancel
          </button>
          <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition text-sm font-medium">
            Save as Draft
          </button>
        </div>
      </div>

      <form className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Task Title
            </label>
            <input
              className="w-full py-3 px-4 rounded-lg outline-none bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              type="text"
              placeholder="Enter task title"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Due Date
              </label>
              <div className="relative">
                <input
                  className="w-full py-3 px-4 pl-10 rounded-lg outline-none bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                  type="date"
                />
                <Calendar
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  size={18}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Estimated Time
              </label>
              <div className="relative">
                <input
                  className="w-full py-3 px-4 pl-10 rounded-lg outline-none bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                  type="text"
                  placeholder="e.g. 2 hours"
                />
                <Clock
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  size={18}
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Assign To
            </label>
            <div className="relative">
              <select className="w-full py-3 px-4 pl-10 rounded-lg outline-none bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition appearance-none">
                <option value="">Select team member</option>
                <option value="aayush">Aayush</option>
                <option value="sujan">Sujan</option>
                <option value="pratik">Pratik</option>
                <option value="bishal">Bishal</option>
                <option value="sita">Sita</option>
              </select>
              <Users
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                size={18}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Category
            </label>
            <div className="relative">
              <select className="w-full py-3 px-4 pl-10 rounded-lg outline-none bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition appearance-none">
                <option value="">Select category</option>
                <option value="design">Design</option>
                <option value="development">Development</option>
                <option value="marketing">Marketing</option>
                <option value="research">Research</option>
              </select>
              <Tag
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                size={18}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Priority
            </label>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setPriority("Low")}
                className={`flex-1 py-3 px-4 rounded-lg flex items-center justify-center transition duration-200 ${
                  priority === "Low"
                    ? "bg-green-500/20 border border-green-500 text-green-500"
                    : "bg-gray-800 border border-gray-700 text-gray-400 hover:bg-gray-700"
                }`}
              >
                <CheckCircle size={18} className="mr-2" />
                Low
              </button>
              <button
                type="button"
                onClick={() => setPriority("Medium")}
                className={`flex-1 py-3 px-4 rounded-lg flex items-center justify-center transition duration-200 ${
                  priority === "Medium"
                    ? "bg-blue-500/20 border border-blue-500 text-blue-500"
                    : "bg-gray-800 border border-gray-700 text-gray-400 hover:bg-gray-700"
                }`}
              >
                <Clock size={18} className="mr-2" />
                Medium
              </button>
              <button
                type="button"
                onClick={() => setPriority("High")}
                className={`flex-1 py-3 px-4 rounded-lg flex items-center justify-center transition duration-200 ${
                  priority === "High"
                    ? "bg-red-500/20 border border-red-500 text-red-500"
                    : "bg-gray-800 border border-gray-700 text-gray-400 hover:bg-gray-700"
                }`}
              >
                <AlertCircle size={18} className="mr-2" />
                High
              </button>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col">
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Description
            </label>
            <textarea
              className="w-full h-32 py-3 px-4 rounded-lg outline-none bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition resize-none"
              placeholder="Enter task details, requirements, and any additional information..."
            ></textarea>
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Attachments
            </label>
            <div className="border-2 border-dashed border-gray-700 rounded-lg p-6 bg-gray-800/50 text-center">
              <input type="file" className="hidden" id="file-upload" multiple />
              <label htmlFor="file-upload" className="cursor-pointer">
                <svg
                  className="mx-auto h-12 w-12 text-gray-500"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H8m36-12h-4m4 0H20"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="mt-1 text-sm text-gray-400">
                  <span className="font-medium text-indigo-400">
                    Click to upload
                  </span>{" "}
                  or drag and drop
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  PDF, DOC, PNG, JPG up to 10MB
                </p>
              </label>
            </div>
          </div>

          <div className="mt-auto grid grid-cols-2 gap-4">
            <button
              type="reset"
              className="py-3 px-6 rounded-lg text-gray-300 font-medium bg-gray-800 hover:bg-gray-700 transition"
            >
              Reset
            </button>
            <button
              type="submit"
              className="py-3 px-6 rounded-lg text-white font-medium bg-indigo-600 hover:bg-indigo-700 transition"
            >
              Create Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;

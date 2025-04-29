import React from "react";
import { LogOut, Bell, Search, Menu, Moon } from "lucide-react";

const Header = ({ userName = "", handleLogout }) => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const unreadNotifications = 3;

  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl shadow-lg p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center">
          <Menu
            className="text-gray-400 mr-4 cursor-pointer md:hidden"
            size={24}
          />
          <div>
            <div className="flex items-center gap-1">
              <h1 className="text-xl font-medium text-gray-300">
                Welcome back,
              </h1>
              <h2 className="text-xl font-bold text-white">{userName}</h2>
              <span className="text-2xl ml-1">👋</span>
            </div>
            <p className="text-gray-400 text-sm mt-1">{formattedDate}</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search tasks..."
              className="bg-gray-800 border border-gray-700 text-gray-300 rounded-lg pl-10 pr-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              size={18}
            />
          </div>

          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
              <Bell className="text-gray-300" size={20} />
              {unreadNotifications > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {unreadNotifications}
                </span>
              )}
            </button>

            <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
              <Moon className="text-gray-300" size={20} />
            </button>

            <div className="h-8 w-px bg-gray-700 mx-1"></div>

            <div className="flex items-center gap-3">
              <div className="hidden md:block">
                <img
                  src="/api/placeholder/40/40"
                  alt="User avatar"
                  className="h-10 w-10 rounded-full border-2 border-indigo-500"
                />
              </div>

              <button
                className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transition-all text-white px-4 py-2 text-sm font-medium rounded-lg shadow-md"
                onClick={handleLogout}
              >
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
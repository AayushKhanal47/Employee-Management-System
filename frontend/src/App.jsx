import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminDashboard from "./components/Auth/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Auth/Dashboard/EmployeeDashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import axios from "axios";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("http://localhost:5005/api/auth/verify-token", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setUser(response.data.user);
        })
        .catch(() => {
          localStorage.removeItem("token");
          setUser(null); 
        });
    } else {
      setUser(null); 
    }
  }, []);

  const handleLogin = (email, role) => {
    setUser({ email, role });
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null); 
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard/admin"
          element={
            user?.role === "admin" ? (
              <AdminDashboard handleLogout={handleLogout} />
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/dashboard/employee"
          element={
            user?.role === "employee" ? (
              <EmployeeDashboard handleLogout={handleLogout} />
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/"
          element={
            user ? (
              user.role === "admin" ? (
                <AdminDashboard handleLogout={handleLogout} />
              ) : (
                <EmployeeDashboard handleLogout={handleLogout} />
              )
            ) : (
              <Login />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
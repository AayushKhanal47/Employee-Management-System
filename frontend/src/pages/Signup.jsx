import React, { useState } from "react";
import axios from "axios";

const Signup = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("employee");
  const [name, setName] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/signup", {
        email,
        password,
        role,
        name,
      });

      localStorage.setItem("token", response.data.token);
      handleLogin(response.data.user.email, response.data.user.role);

      setEmail("");
      setPassword("");
      setRole("employee");
      setName("");
    } catch (error) {
      alert("Signup failed! Please try again.");
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          type="email"
          placeholder="Email Address"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          type="password"
          placeholder="Password"
        />
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          type="text"
          placeholder="Full Name"
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="employee">Employee</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;

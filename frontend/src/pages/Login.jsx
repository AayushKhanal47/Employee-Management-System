import React, { useState } from "react";
import axios from "axios";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);
      handleLogin(response.data.user.email, response.data.user.role);

      setEmail("");
      setPassword("");
    } catch (error) {
      alert("Invalid credentials! Please try again.");
      setEmail("");
      setPassword("");
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
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;

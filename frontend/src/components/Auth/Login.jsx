import React, { useState } from "react";
import { motion } from "framer-motion";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-900 shadow-2xl border border-gray-700 p-8 rounded-2xl max-w-sm w-full text-center"
      >
        <h2 className="text-3xl font-bold text-white mb-6">Welcome</h2>
        <form onSubmit={submitHandler} className="flex flex-col space-y-4">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="text-white outline-none bg-gray-800 border border-gray-600 px-5 py-3 text-lg rounded-lg focus:border-emerald-500 transition-all"
            type="email"
            placeholder="Email Address"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="text-white outline-none bg-gray-800 border border-gray-600 px-5 py-3 text-lg rounded-lg focus:border-emerald-500 transition-all"
            type="password"
            placeholder="Password"
          />
          <button className="bg-emerald-600 hover:bg-emerald-700 transition-all text-white font-semibold px-5 py-3 text-lg rounded-lg mt-3 shadow-lg">
            Log in
          </button>
        </form>
        <p className="text-gray-400 mt-4 text-sm">
          Don't have an account?{" "}
          <a href="#" className="text-emerald-400 hover:underline">
            Sign up
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;

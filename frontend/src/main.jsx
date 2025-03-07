import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthContex from "./context/AuthContex.jsx";
import TaskContex from "./context/TaskContex.jsx";
;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContex>
      <TaskContex>
      <App />
      </TaskContex>
      
    </AuthContex>
  </StrictMode>
);

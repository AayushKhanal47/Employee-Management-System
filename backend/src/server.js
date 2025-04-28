import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import isAutenticated from "./middlewares/authMiddleware.js";
import authRoutes from "./routes/authRoutes.js";

app.use("/api/auth", authRoutes);

dotenv.config();
console.log(dotenv.process);

connectDB();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(path.resolve(), "uploads")));

app.use("/api", userRoutes);
app.use("/api/tasks", isAutenticated, taskRoutes);

const PORT = process.env.PORT ?? 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

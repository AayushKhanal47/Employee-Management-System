import jwt from "jsonwebtoken";
import User from "../models/User"
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });

  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET
  );
  res.json({ token, user: { email: user.email, role: user.role } });
};

module.exports = { loginUser };

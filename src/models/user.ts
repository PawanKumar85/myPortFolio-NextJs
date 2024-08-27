import mongoose from "mongoose";

const userScehma = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  forgotPasswordToken: String,
  forgotPasswordExpires: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

const User = mongoose.models.users || mongoose.model("users", userScehma);
export default User;

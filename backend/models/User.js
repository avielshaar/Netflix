import mongoose from "mongoose";

const userschema = new mongoose.Schema(
  {
    userName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true },
    profilePicture: { type: String },
    // put operation add my list of content
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userschema);
export default User;
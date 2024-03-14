import mongoose from 'mongoose';

const userschema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true },
    profilePicture: { type: String },
    myList: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Content',
        required: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userschema);
export default User;

import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  UserName: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  ConfirmPassword: {
    type: String,
  },
  Phone: {
    type: String,
  },
});
export const User = mongoose.model("User", UserSchema);


import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  userType: {
    type: String,
    default: 'member'
  },
});

export default mongoose.model("User", userSchema);
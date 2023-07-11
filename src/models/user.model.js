import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    fullName: String,
    avatar: String,
    role: String,
})
module.exports = mongoose.model("user", UserSchema);
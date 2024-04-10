import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        default: true
    },
    email: {
        type: String,
        default: true
    },
    password: {
        type: String,
        default: true
    },
    role: {
        type: String,
        default: "member"
    }
})

export default mongoose.model("User", userSchema)
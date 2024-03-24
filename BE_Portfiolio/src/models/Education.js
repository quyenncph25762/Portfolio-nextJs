import mongoose from "mongoose";

const educationSchema = new mongoose.Schema({
    logo: {
        type: String
    },
    major: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    gpa: {
        type: Number,
        required: true
    },
    graduate: {
        type: Date
    }
})

export default mongoose.model("Education", educationSchema)
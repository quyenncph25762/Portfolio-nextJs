import mongoose from "mongoose"

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    projects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project",
        required: true,
    }],
})

export default mongoose.model("Category", categorySchema)
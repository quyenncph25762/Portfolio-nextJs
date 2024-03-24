import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    knowledge: {
        type: String,
        required: true
    },
    imageAbout: [{
        type: Object,
        required: true
    }]
})

export default mongoose.model("About", aboutSchema)
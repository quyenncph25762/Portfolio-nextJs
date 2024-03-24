import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    images: [{
        type: Object,
        required: true,
    }],
    languages: [{
        type: mongoose.Types.ObjectId, ref: "Languages"
    }],
    description: {
        type: String,
    },
    linkGithub: {
        type: String,
        required: true
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
    dateStart: {
        type: Date,
    },
    dateEnd: {
        type: Date,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    hide: {
        type: Boolean,
    },
    deleted: {
        type: Boolean,
        default: false,
    },
})

export default mongoose.model("Project", projectSchema) 
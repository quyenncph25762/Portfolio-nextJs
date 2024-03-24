import mongoose from "mongoose"

const LanguageSchema = new mongoose.Schema({
    nameLanguage: {
        type: String,
    },
    colorStyle: {
        type: String
    },
    project_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project"
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

export default mongoose.model("Languages", LanguageSchema)
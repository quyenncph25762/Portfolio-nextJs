import mongoose from "mongoose";

const bannerSchema = new mongoose.Schema({
    images: [
        {
            type: Object,
            required: true
        }
    ],
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

export default mongoose.model("Banner", bannerSchema)
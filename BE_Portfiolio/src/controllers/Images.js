import cloudinary from "../config/cloudinaryConfig";

export const uploadImages = async (req, res) => {
    try {
        const images = req?.files?.map((file) => file.path)
        let uploadImages = []
        for (let image of images) {
            const results = await cloudinary.uploader.upload(image)
            uploadImages.push({
                url: results.secure_url,
                publicId: results.public_id
            })
        }
        return res.status(201).json(uploadImages)
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}
export const removeImage = async (req, res) => {
    try {
        const publicId = req.params.publicId
        const results = await cloudinary.uploader.destroy(publicId)
        if (results.result === "not found") {
            throw new Error("Xoa that bai")
        }
        return res.status(200).json({
            message: "xoa thanh cong"
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}
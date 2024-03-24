import { CloudinaryStorage } from "multer-storage-cloudinary"
import cloudinary from "../config/cloudinaryConfig"
import multer from "multer"
export const uploadImage = () => {
    const storage = new CloudinaryStorage({
        cloudinary: cloudinary,
        params: ({
            folder: "my-portfolio"
        })
    })
    const upload = multer({ storage: storage })
    return upload.array("images", 10)
}
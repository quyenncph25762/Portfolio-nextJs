import { Router } from "express"
import { removeImage, uploadImages } from "../controllers/Images"
import { uploadImage } from "../middleware/cloudinary"
import { CloudinaryStorage } from "multer-storage-cloudinary"
import cloudinary from "../config/cloudinaryConfig"
import multer from "multer"
const routerImage = Router()

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: ({
        folder: "my-portfolio"
    })
})
const upload = multer({ storage: storage })
routerImage.post("/upload", upload.array("images", 10), uploadImages)
routerImage.delete("/remove/:publicId", removeImage)
export default routerImage


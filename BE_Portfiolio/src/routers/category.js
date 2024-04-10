import express from "express"
import { addCategory, deleteCategory, getAllCategory, getOneCategory, updateCategory } from "../controllers/Category"
import { checkPermission } from "../middleware/checkpermission"
const routerCategory = express.Router()

routerCategory.post("/add", checkPermission, checkPermission, addCategory)
routerCategory.get("/", getAllCategory)
routerCategory.get("/:id", getOneCategory)
routerCategory.delete("/:id", checkPermission, deleteCategory)
routerCategory.patch("/:id", checkPermission, updateCategory)
export default routerCategory
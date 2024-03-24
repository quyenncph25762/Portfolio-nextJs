import express from "express"
import { addCategory, deleteCategory, getAllCategory, getOneCategory, updateCategory } from "../controllers/Category"
const routerCategory = express.Router()

routerCategory.post("/add", addCategory)
routerCategory.get("/", getAllCategory)
routerCategory.get("/:id", getOneCategory)
routerCategory.delete("/:id", deleteCategory)
routerCategory.patch("/:id", updateCategory)
export default routerCategory
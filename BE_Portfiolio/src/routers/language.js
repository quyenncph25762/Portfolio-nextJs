import express from "express"
import { addLanguage, deleteLanguage, getAllLanguage, getOneLanguage, updateLanguage } from "../controllers/Language"
const routerLanguage = express.Router()

routerLanguage.post("/add", addLanguage)
routerLanguage.get("/", getAllLanguage)
routerLanguage.get("/:id", getOneLanguage)
routerLanguage.delete("/:id", deleteLanguage)
routerLanguage.patch("/:id", updateLanguage)
export default routerLanguage
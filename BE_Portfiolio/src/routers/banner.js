import express from "express"
import { addBanner, fetchBanner, fetchOneBanner, removeBanner, updateBanner } from "../controllers/Banner"

const routerBanner = express.Router()

routerBanner.get("/", fetchBanner)
routerBanner.get("/:id", fetchOneBanner)
routerBanner.post("/add", addBanner)
routerBanner.patch("/update/:id", updateBanner)
routerBanner.delete("/:id", removeBanner)
export default routerBanner


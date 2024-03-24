import express from "express";
import { addAbout, fetchAllAbout, fetchOneAbout, removeAbout, updateAbout } from "../controllers/About";

const routerAbout = express.Router()

routerAbout.post("/add", addAbout)
routerAbout.get("/", fetchAllAbout)
routerAbout.get("/:id", fetchOneAbout)
routerAbout.delete("/:id", removeAbout)
routerAbout.patch("/:id/update", updateAbout)

export default routerAbout
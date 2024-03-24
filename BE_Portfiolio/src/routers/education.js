import express from "express";
import { addEducation, fetchAllEducation, fetchOneEducation, removeEducation, updateEducation } from "../controllers/Education";

const routerEducation = express.Router()

routerEducation.get("/", fetchAllEducation)
routerEducation.get("/:id", fetchOneEducation)
routerEducation.post("/add", addEducation)
routerEducation.patch("/:id/update", updateEducation)
routerEducation.delete("/:id", removeEducation)

export default routerEducation
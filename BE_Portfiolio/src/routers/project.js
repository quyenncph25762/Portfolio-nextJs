import express from "express"
import { addProject, deleteProject, getAllProject, getOneProject, updateProject } from "../controllers/Project"
const routerProject = express.Router()

routerProject.post("/add", addProject)
routerProject.patch("/:id", updateProject)
routerProject.get("/", getAllProject)
routerProject.get("/:id", getOneProject)
routerProject.delete("/:id", deleteProject)

export default routerProject
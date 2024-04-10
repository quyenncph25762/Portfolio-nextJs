import express from "express"
import { addProject, deleteProject, getAllProject, getOneProject, updateProject } from "../controllers/Project"
import { checkPermission } from "../middleware/checkpermission"
const routerProject = express.Router()

routerProject.post("/add", checkPermission, addProject)
routerProject.patch("/:id", checkPermission, updateProject)
routerProject.get("/", getAllProject)
routerProject.get("/:id", getOneProject)
routerProject.delete("/:id", checkPermission, deleteProject)

export default routerProject
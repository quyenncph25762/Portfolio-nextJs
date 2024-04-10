import express from "express"
import { deleteUser, getAllUser, getOneUser, Signin, Signup, updateUser } from "../controllers/Signup"

const routerAuth = express.Router()

routerAuth.post("/signup", Signup)
routerAuth.post("/signin", Signin)
routerAuth.get("/", getAllUser)
routerAuth.get("/:id", getOneUser)
routerAuth.patch("/:id", updateUser)
routerAuth.delete("/:id", deleteUser)
export default routerAuth 
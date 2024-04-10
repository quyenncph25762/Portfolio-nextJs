import express from "express";
import routerLanguage from "./language";
import routerCategory from "./category";
import routerProject from "./project";
import routerImage from "./uploadImage";
import routerBanner from "./banner";
import routerAbout from "./about";
import routerEducation from "./education";
import routerAuth from "./auth";
const router = express.Router()

router.use("/language", routerLanguage)
router.use("/category", routerCategory)
router.use("/project", routerProject)
router.use("/images", routerImage)
router.use("/banner", routerBanner)
router.use("/about", routerAbout)
router.use("/education", routerEducation)
router.use("/auth", routerAuth)
export default router
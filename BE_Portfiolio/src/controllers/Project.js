import { projectSchema } from "../validations/project"
import Project from "../models/Project"
import Category from "../models/Category"
import Language from "../models/Language"
export const addProject = async (req, res) => {
    try {
        const { error } = projectSchema.validate(req.body)
        if (error) {
            return res.status(400).json({
                message: error.details[0].message,
            });
        }
        const { title, description, images, languages, linkGithub, categoryId, dateStart, dateEnd } = req.body
        const newProject = { title, description, images, categoryId, dateStart, dateEnd, linkGithub, languages }
        const project = await Project.create(newProject)
        if (!project) {
            return res.status(400).json({
                message: "Them khong thanh cong",
            })
        }
        // const languagesArr = []
        // languages.forEach((language) => {
        //     const { nameLanguage, colorStyle } = language
        //     languagesArr.push({ project_id: project._id, nameLanguage, colorStyle })
        // })
        await Category.findByIdAndUpdate(project.categoryId, {
            $addToSet: {
                products: project._id,
            },
        });
        // await languagesArr.forEach(async (newLanguage) => {
        //     const language = await Language.create(newLanguage)
        //     if (!language) {
        //         return res.status(404).json({
        //             message: "productDetail not found",
        //         });
        //     }
        //     await Project.findByIdAndUpdate(language.project_id, {
        //         $addToSet: {
        //             languages: language._id,
        //         },
        //     });
        // })
        return res.status(201).json({
            message: "Them thanh cong",
            project
        })
    } catch (error) {
        console.log(error)
    }
}
export const updateProject = async (req, res) => {
    try {
        const { title, description, images, languages, categoryId, dateStart, dateEnd } = req.body
        const newProject = { title, description, images, categoryId, dateStart, dateEnd, languages }
        const project = await Project.findOne({ _id: req.params.id })
        const productIdToRemove = req.params.id;
        if (!project) {
            return res.status(400).json({
                message: "sua khong thanh cong",
            })
        }
        await Category.updateOne({ _id: project.categoryId }, {
            $pull: { projects: productIdToRemove }
        });
        await Category.updateOne({ _id: categoryId }, {
            $pull: { projects: productIdToRemove }
        });
        console.log(languages)
        const languagesArr = []

        await languagesArr.forEach(async (newLanguage) => {
            const language = await Language.create(newLanguage)
            if (!language) {
                return res.status(404).json({
                    message: "productDetail not found",
                });
            }
            await Project.findByIdAndUpdate(language.project_id, {
                $addToSet: {
                    variants: language._id,
                },
            });
        })
        const updateProject = await Project.findOneAndUpdate({ _id: req.params.id }, newProject, { new: true })
        return res.status(201).json({
            message: "sua thanh cong",
            updateProject
        })
    } catch (error) {
        console.log(error)
    }
}
export const deleteProject = async (req, res) => {
    try {
        const removeLanguage = await Language.deleteMany({ project_id: req.params.id })
        if (!removeLanguage) {
            return res.status(401).json({
                message: "Khong tim thay language nao"
            })
        }
        const removeProject = await Project.findOneAndDelete({ _id: req.params.id })
        return res.status(200).json({
            message: "Xoa thanh cong",
            removeProject
        })
    } catch (error) {
        console.log(error)
    }
}
export const getAllProject = async (req, res) => {
    try {
        const product = await Project.find().populate("languages").populate("categoryId")
        if (!product) {
            return res.status(401).json({
                message: "khong tim thay project nao"
            })
        }
        return res.status(200).json(product)
    } catch (error) {
        console.log(error)
    }
}
export const getOneProject = async (req, res) => {
    try {
        const product = await Project.findOne({ _id: req.params.id }).populate("categoryId").populate("languages")
        if (!product) {
            return res.status(401).json({
                message: "khong tim thay project nao"
            })
        }
        return res.status(200).json(product)
    } catch (error) {
        console.log(error)
    }
}
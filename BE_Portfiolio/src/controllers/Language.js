import Language from "../models/Language"

export const addLanguage = async (req, res) => {
    try {
        const language = await Language.create(req.body)
        if (!language) {
            return res.status(400).json({
                message: "Them khong thanh cong"
            })
        }
        return res.status(201).json({
            message: "Them thanh cong",
            language
        })
    } catch (error) {
        console.log(error)
    }
}
export const getAllLanguage = async (req, res) => {
    try {
        const language = await Language.find()
        if (!language || language.length <= 0) {
            return res.status(400).json({
                message: "khong tim thay language"
            })
        }
        return res.status(201).json(
            language
        )
    } catch (error) {
        console.log(error)
    }
}
export const getOneLanguage = async (req, res) => {
    try {
        const language = await Language.findById(req.params.id)
        if (!language) {
            return res.status(400).json({
                message: "khong tim thay language"
            })
        }
        return res.status(201).json(
            language
        )
    } catch (error) {
        console.log(error)
    }
}
export const deleteLanguage = async (req, res) => {
    try {
        const language = await Language.findByIdAndDelete(req.params.id)
        if (!language) {
            return res.status(400).json({
                message: "khong tim thay language"
            })
        }
        return res.status(201).json(
            {
                message: "xoa thanh cong",
                language
            }
        )
    } catch (error) {
        console.log(error)
    }
}
export const updateLanguage = async (req, res) => {
    try {
        const language = await Language.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
        if (!language) {
            return res.status(400).json({
                message: "khong tim thay language"
            })
        }
        return res.status(201).json(
            {
                message: "sua thanh cong",
                language
            }
        )
    } catch (error) {
        console.log(error)
    }
}
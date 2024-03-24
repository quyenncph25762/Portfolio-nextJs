import About from "../models/About"

export const addAbout = async (req, res) => {
    try {
        const about = await About.create(req.body)
        if (!about) {
            return res.status(400).json({
                message: "Them khong thanh cong"
            })
        }
        return res.status(201).json({
            message: "Them thanh cong",
            about
        })
    } catch (error) {
        console.log(error)
    }
}
export const fetchAllAbout = async (req, res) => {
    try {
        const about = await About.find()
        if (!about) {
            return res.status(400).json({
                message: "khong co san pham nao"
            })
        }
        return res.status(201).json(
            about
        )
    } catch (error) {
        console.log(error)
    }
}
export const fetchOneAbout = async (req, res) => {
    try {
        const about = await About.findById({ _id: req.params.id })
        if (!about) {
            return res.status(400).json({
                message: "khong co san pham nao"
            })
        }
        return res.status(201).json(
            about
        )
    } catch (error) {
        console.log(error)
    }
}
export const removeAbout = async (req, res) => {
    try {
        const about = await About.findByIdAndDelete({ _id: req.params.id })
        if (!about) {
            return res.status(400).json({
                message: "khong co san pham nao"
            })
        }
        return res.status(201).json(
            {
                message: "Xoa thanh cong"
            }
        )
    } catch (error) {
        console.log(error)
    }
}
export const updateAbout = async (req, res) => {
    try {
        const about = await About.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
        if (!about) {
            return res.status(400).json({
                message: "khong co san pham nao"
            })
        }
        return res.status(201).json(
            {
                message: "sua thanh cong",
                about
            }
        )
    } catch (error) {
        console.log(error)
    }
}
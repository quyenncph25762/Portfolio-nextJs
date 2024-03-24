import Education from "../models/Education"

export const addEducation = async (req, res) => {
    try {
        const education = await Education.create(req.body)
        if (!education) {
            return res.status(400).json({
                message: "Them khong thanh cong"
            })
        }
        return res.status(201).json({
            message: "Them thanh cong",
            education
        })
    } catch (error) {
        console.log(error)
    }
}
export const fetchAllEducation = async (req, res) => {
    try {
        const education = await Education.find()
        if (!education) {
            return res.status(400).json({
                message: "Them khong thanh cong"
            })
        }
        return res.status(201).json(
            education
        )
    } catch (error) {
        console.log(error)
    }
}
export const fetchOneEducation = async (req, res) => {
    try {
        const education = await Education.findById({ _id: req.params.id })
        if (!education) {
            return res.status(400).json({
                message: "khong tim thay"
            })
        }
        return res.status(201).json(
            education
        )
    } catch (error) {
        console.log(error)
    }
}
export const removeEducation = async (req, res) => {
    try {
        const education = await Education.findByIdAndDelete({ _id: req.params.id })
        if (!education) {
            return res.status(400).json({
                message: "Khong tim thay education"
            })
        }
        return res.status(201).json(
            education
        )
    } catch (error) {
        console.log(error)
    }
}
export const updateEducation = async (req, res) => {
    try {
        const education = await Education.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
        if (!education) {
            return res.status(400).json({
                message: "Khong tim thay education"
            })
        }
        return res.status(201).json(
            education
        )
    } catch (error) {
        console.log(error)
    }
}
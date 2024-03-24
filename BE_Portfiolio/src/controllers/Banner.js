import AvatarBanner from "../models/AvatarBanner"

export const addBanner = async (req, res) => {
    try {
        const banner = await AvatarBanner.create(req.body)
        if (!banner) {
            return res.status(400).json({
                message: "Them khong thanh cong"
            })
        }
        return res.status(201).json({
            message: "Them thanh cong",
            banner
        })
    } catch (error) {
        console.log(error)
    }
}
export const updateBanner = async (req, res) => {
    try {
        const banner = await AvatarBanner.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
        if (!banner) {
            return res.status(400).json({
                message: "sua khong thanh cong"
            })
        }
        return res.status(201).json({
            message: "sua thanh cong",
            banner
        })
    } catch (error) {
        console.log(error)
    }
}
export const removeBanner = async (req, res) => {
    try {
        const banner = await AvatarBanner.findByIdAndDelete({ _id: req.params.id })
        if (!banner) {
            return res.status(400).json({
                message: "xoa thanh cong"
            })
        }
        return res.status(201).json({
            message: "xoa thanh cong",
            banner
        })
    } catch (error) {
        console.log(error)
    }
}
export const fetchBanner = async (req, res) => {
    try {
        const banner = await AvatarBanner.find()
        if (!banner) {
            return res.status(400).json({
                message: "khong thay san pham nao"
            })
        }
        return res.status(201).json(
            banner
        )
    } catch (error) {
        console.log(error)
    }
}
export const fetchOneBanner = async (req, res) => {
    try {
        const banner = await AvatarBanner.findById({ _id: req.params.id })
        if (!banner) {
            return res.status(400).json({
                message: "khong thay san pham nao"
            })
        }
        return res.status(201).json(
            banner
        )
    } catch (error) {
        console.log(error)
    }
}
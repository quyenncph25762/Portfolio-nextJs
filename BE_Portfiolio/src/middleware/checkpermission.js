import jwt from "jsonwebtoken"
import User from "../models/User"

export const checkPermission = async (req, res, next) => {
    try {
        const authThor = req.headers.authorization
        const token = authThor && authThor.split(" ")[1]
        if (!authThor) {
            return res.status(401).json({
                message: "Bạn chưa đăng nhập!"
            })
        }
        jwt.verify(token, "Portfolio", async (err, payload) => {
            if (err) {
                if (err.name === "JsonWebTokenError") {
                    return res.status(400).json({
                        message: "Token khong hop le!"
                    })
                }
                if (err.name === "TokenExpiredError") {
                    return res.status(400).json({
                        message: "Token da het han!"
                    })
                }
            }
            const user = await User.findById(payload.id)
            if (user.role !== "admin") {
                return res.status(403).json({
                    message: "Ban khong co quyen thuc hien hanh dong nay!"
                })
            }
            next()
        })
    } catch (error) {
        console.log(object)
    }
}
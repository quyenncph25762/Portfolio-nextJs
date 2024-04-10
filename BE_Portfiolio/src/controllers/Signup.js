import User from "../models/User"
import bcrypt from "bcryptjs"
import { signinSchema, signupSchema } from "../validations/auth"
import jwt from "jsonwebtoken"
export const Signup = async (req, res) => {
    try {
        const { error } = signupSchema.validate(req.body, { abortEarly: false })
        if (error) {
            return res.status(401).json({
                messages: error.details.map((err) => err.message)
            })
        }
        const userExist = await User.findOne({ email: req.body.email })
        if (userExist) {
            return res.status(400).json({
                message: "Email da ton tai"
            })
        }

        const hashPassword = await bcrypt.hash(req.body.password, 10)
        const user = await User.create({ ...req.body, password: hashPassword })
        return res.status(201).json({
            message: "Tạo tài khoản thành công",
            user
        })
    } catch (error) {
        console.log(error)
    }
}
export const Signin = async (req, res) => {
    try {
        const { error } = signinSchema.validate(req.body, { abortEarly: false })
        if (error) {
            return res.status(401).json({
                messages: error.details.map((err) => err.message)
            })
        }

        const userExist = await User.findOne({ email: req.body.email })
        if (!userExist) {
            return res.status(400).json({
                messages: "Email khong ton tai"
            })
        }
        const checkPassword = await bcrypt.compare(req.body.password, userExist.password)
        if (!checkPassword) {
            return res.status(400).json({
                messages: "Sai mat khau"
            })
        }

        const token = await jwt.sign({ id: userExist._id }, "Portfolio", { expiresIn: "1d" })
        return res.status(200).json({
            message: "dang nhap thanh cong",
            accessToken: token,
            userExist
        })
    } catch (error) {
        console.log(error)
    }
}

export const getAllUser = async (req, res) => {
    try {
        const user = await User.find()
        if (!user) {
            return res.status(400).json({
                message: "Khong co user nao"
            })
        }
        return res.status(200).json(user)
    } catch (error) {
        console.log(error)
    }
}
export const getOneUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if (!user) {
            return res.status(400).json({
                message: "Khong co user nao"
            })
        }
        return res.status(200).json(user)
    } catch (error) {
        console.log(error)
    }
}
export const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
        if (!user) {
            return res.status(400).json({
                message: "Khong co user nao"
            })
        }
        return res.status(200).json(user)
    } catch (error) {
        console.log(error)
    }
}
export const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete({ _id: req.params.id })
        if (!user) {
            return res.status(400).json({
                message: "Khong co user nao"
            })
        }
        return res.status(200).json({
            message: "Xoa thanh cong",
            user: user.userName
        })
    } catch (error) {
        console.log(error)
    }
}
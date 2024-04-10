import joi from "joi"

export const signupSchema = joi.object({
    userName: joi.string().required(),
    email: joi.string().email().required().messages({
        "string.email": "Email khong dung dinh dang"
    }),
    password: joi.string().min(6).required().messages({
        "string.min": `password phai chua it nhat {#limit} ki tu`
    }),
    confirmPassword: joi.string().valid(joi.ref("password")).required().messages({
        "any.only": "confirmPassword khong dung"
    })
})
export const signinSchema = joi.object({
    email: joi.string().email().required().messages({
        "string.email": "Email khong dung dinh dang"
    }),
    password: joi.string().min(6).required().messages({
        "string.min": `password phai chua it nhat {#limit} ki tu`
    }),
})
import Joi from "joi";

export const signUpValidator = Joi.object({
    userName: Joi.string().required().min(6).max(265).messages({
        "string.empty": "userName không được để trống",
        "any.required": "userName là bắt buộc",
        "string.min": "userName phải có ít nhất {#litmit} kí tự",
        "string.max": "userName phải có ít hơn {#litmit + 1} kí tự",
    }),

    phone: Joi.string().required().min(6).max(265).messages({
        "string.empty": "phone không được để trống",
        "any.required": "phone là bắt buộc",
        "string.min": "phone phải có ít nhất {#litmit} kí tự",
        "string.max": "phone phải có ít hơn {#litmit + 1} kí tự",
    }),

    address: Joi.string().required().min(6).max(265).messages({
        "string.empty": "address không được để trống",
        "any.required": "address là bắt buộc",
        "string.min": "address phải có ít nhất {#litmit} kí tự",
        "string.max": "address phải có ít hơn {#litmit + 1} kí tự",
    }),

    email: Joi.string().required().email().messages({
        "string.empty": "Email không được để trống",
        "any.required": "Email là bắt buộc",
        "string.email": "Email không được đình dạng",
    }),
    password: Joi.string().required().min(6).max(265).messages({
        "string.empty": "password không được để trống",
        "any.required": "password là bắt buộc",
        "string.min": "password phải có ít nhất {#litmit} kí tự",
        "string.max": "password phải có ít hơn {#litmit + 1} kí tự",
    }),
    confirmPassword: Joi.string().required().min(6).max(265).valid(Joi.ref("password")).messages({
        "string.empty": "confirmPassword không được để trống",
        "any.required": "confirmPassword là bắt buộc",
        "string.min": "confirmPassword phải có ít nhất {#litmit} kí tự",
        "string.max": "confirmPassword phải có ít hơn {#litmit + 1} kí tự",
        "any.only": "confirmPassword không khớp với password"
    }),
    role: Joi.string()
});
  
export const signInValidator = Joi.object({
    email: Joi.string().required().email().messages({
        "string.empty": "Email không được để trống",
        "any.required": "Email là bắt buộc",
        "string.email": "Email không được đình dạng",
    }),
    password: Joi.string().required().min(6).max(265).messages({
        "string.empty": "password không được để trống",
        "any.required": "password là bắt buộc",
        "string.min": "password phải có ít nhất {#litmit} kí tự",
        "string.max": "password phải có ít hơn {#litmit + 1} kí tự",
    }),
});

export const addUserValidator = Joi.object({
    userName: Joi.string().required().min(6).max(265).messages({
        "string.empty": "userName không được để trống",
        "any.required": "userName là bắt buộc",
        "string.min": "userName phải có ít nhất {#litmit} kí tự",
        "string.max": "userName phải có ít hơn {#litmit + 1} kí tự",
    }),

    phone: Joi.string().required().min(6).max(265).messages({
        "string.empty": "phone không được để trống",
        "any.required": "phone là bắt buộc",
        "string.min": "phone phải có ít nhất {#litmit} kí tự",
        "string.max": "phone phải có ít hơn {#litmit + 1} kí tự",
    }),

    address: Joi.string().required().min(6).max(265).messages({
        "string.empty": "address không được để trống",
        "any.required": "address là bắt buộc",
        "string.min": "address phải có ít nhất {#litmit} kí tự",
        "string.max": "address phải có ít hơn {#litmit + 1} kí tự",
    }),

    email: Joi.string().required().email().messages({
        "string.empty": "Email không được để trống",
        "any.required": "Email là bắt buộc",
        "string.email": "Email không được đình dạng",
    }),

    role: Joi.string().required().min(2).max(265).messages({
        "string.empty": "Role không được để trống",
        "any.required": "Role là bắt buộc",
        "string.role": "Role không được đình dạng",
    }),

    password: Joi.string().required().min(6).max(265).messages({
        "string.empty": "password không được để trống",
        "any.required": "password là bắt buộc",
        "string.min": "password phải có ít nhất {#litmit} kí tự",
        "string.max": "password phải có ít hơn {#litmit + 1} kí tự",
    }),

    confirmPassword: Joi.string().required().min(6).max(265).valid(Joi.ref("password")).messages({
        "string.empty": "confirmPassword không được để trống",
        "any.required": "confirmPassword là bắt buộc",
        "string.min": "confirmPassword phải có ít nhất {#litmit} kí tự",
        "string.max": "confirmPassword phải có ít hơn {#litmit + 1} kí tự",
        "any.only": "confirmPassword không khớp với password"
    }),
    role: Joi.string()
});
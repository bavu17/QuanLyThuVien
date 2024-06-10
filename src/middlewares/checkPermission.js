import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import User from "../models/user.js"
dotenv.config()

const { SECRET_CODE } = process.env;

export const checkPermission = async (req, res, next) => {
    try {
        //B1 : Nguoi dung da dang nhap hay chua
        const token = req.headers.authorization?.split(" ")[1]
        //B2 : Kiem tra token
        if(!token) {
            return res.status(403).json({
                message: "Ban chua dang nhap"
            });
        }
        //B3 : Kiem tra quyen cua nguoi dung
        const decoded = jwt.verify(token,SECRET_CODE);
        const user = await User.findById(decoded._id);
        if(!user) {
            return res.status(403).json({
                message: "Token loi"
            });
        }

        if(user.role !== "admin") {
            return res.status(400).json({
                message: "Ban khong co quyen lam viec nay"
            });
        }
        //B4 : next
        next();
    } catch (error) {
        if (error instanceof jwt.JsonWebTokenError) {
            return res.status(403).json({
                message: "Token loi"
            });
        } else {
            res.status(500).json({
                name: error.name,
                message: error.message,
            });
        }
    }
}
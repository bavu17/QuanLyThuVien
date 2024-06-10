import { Router } from "express";
import { uploadImages } from "../controllers/images.js";
import cloudinary from "../configs/cloudinaryConfig.js";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";

const routerImages = Router();

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "baocaocuoiki",
        format: "jpg" 
    }
})

const upload = multer({ storage: storage });

routerImages.post("/upload",upload.array("images", 10), uploadImages)

export default routerImages;
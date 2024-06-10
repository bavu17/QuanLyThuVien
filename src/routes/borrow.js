import express from "express";
import {
     create, 
     getAll, 
     getDetail, 
     remove, 
     update 
    } from "../controllers/borrow.js"; // Thay "product.js" thành "borrow.js"
const router = express.Router();

router.get("/getAll", getAll);

router.get("/:id", getDetail);

router.post("/", create);

router.put("/:id", update);

router.delete("/:id", remove);




export default router;

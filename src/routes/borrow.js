import express from "express";
import {
     getAll, 
     remove, 
     update 
    } from "../controllers/borrow.js"; // Thay "product.js" thành "borrow.js"
const router = express.Router();

router.get("/", getAll);

router.put("/:id", update);

router.delete("/:id", remove);




export default router;

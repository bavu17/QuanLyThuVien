import express from "express";
import {
     getAll, 
     update 
    } from "../controllers/product.js";
const router = express.Router();

router.get("/", getAll);

router.put("/:id", update);

export default router;
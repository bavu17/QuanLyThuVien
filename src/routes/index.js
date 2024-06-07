import express from "express";
import routerProduct from "./product.js";
import routerBorrow from "./borrow.js";
const router = express.Router();

router.use("/product", routerProduct);
router.use("/borrow", routerBorrow);
export default router
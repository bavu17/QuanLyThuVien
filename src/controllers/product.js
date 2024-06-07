import { any } from "webidl-conversions";
import Product from "../models/product.js";
import { productValid } from "../validation/product.js";


export const getAll = async (req, res) => {
    try {
        const products = await Product.find();
        if(products.length === 0){
        return res.status(404).json({
            message:"khong tim thay san pham",
        });
    }
    return res.status(200).json({
        message:"lay san pham thanh cong",
        datas: products,
    });
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
};


export const update = async (req, res) => {
    try {
        const {error} = productValid.validate(req.body, {abortEarly: false});
        if(error) {
            return res.status(400).json({
                message: error.details[0].message,
            })
        }
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if(!product) {
            return res.status(404).json({
                message: "Cap nhat san pham khong thanh cong",
            });
        }
        return res.status(200).json({
            message: "Cap nhat san pham thanh cong",
            datas: product,
        });
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
}

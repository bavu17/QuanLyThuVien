import { any } from "webidl-conversions";
import Borrow from "../models/borrow.js"; 
import { borrowValid } from "../validation/borrow.js"; 

export const getAll = async (req, res) => {
    try {
        const borrows = await Borrow.find(); 
        if(borrows.length === 0){
            return res.status(404).json({
                message: "Không tìm thấy sản phẩm", 
            });
        }
        return res.status(200).json({
            message: "Lấy sản phẩm thành công", 
            datas: borrows,
        });
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
};

export const update = async (req, res) => {
    try {
        
        const { error: borrowError } = borrowValid.validate(req.body);
        if (borrowError) {
            return res.status(400).json({ error: "bad Request", message: borrowError.details[0].message });
        }

        
        const { user_id, product_id, borrow_date, return_date, status } = req.body;
        if (!user_id || !product_id || !borrow_date || !return_date || !status) {
            return res.status(400).json({ error: "Bad Request", message: "Missing required fields" });
        }

        
        const borrow = await Borrow.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });

        
        return res.status(201).json({ message: "Tạo mượn sách thành công", data: borrow });
    } catch (error) {
        
        console.error("Lỗi khi tạo mượn sách:", error);
        return res.status(500).json({ error: "Internal Server Error", message: "Đã xảy ra lỗi khi tạo mượn sách" });
    }
};


export const remove = async (req, res) => {
    try {
        const data = await Borrow.findByIdAndDelete(req.params.id); 
        if(!data){
            return res.status(404).json({
                message: "Xóa sản phẩm không thành công", 
            });
        }
        return res.status(200).json({
            message: "Xóa sản phẩm thành công", 
            datas: data,
        });
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
};

import Borrow from "../models/borrow.js"; // Changed "Product" to "Borrow"
import { borrowValid } from "../validation/borrow.js"; // Changed "productValid" to "borrowValid"

export const getAll = async (req, res) => {
    try {
        const borrows = await Borrow.find(); // Changed "Product" to "Borrow"
        if(borrows.length === 0){
            return res.status(404).json({
                message: "Không tìm thấy sản phẩm", // Changed to Vietnamese
            });
        }
        return res.status(200).json({
            message: "Lấy sản phẩm thành công", // Changed to Vietnamese
            datas: borrows,
        });
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
};

export const getDetail = async (req, res) => {
    try {
        const borrow = await Borrow.findById(req.params.id); // Changed "Product" to "Borrow"
        if(!borrow){
            return res.status(404).json({
                message: "Không tìm thấy sản phẩm", // Changed to Vietnamese
            });
        }
        return res.status(200).json({
            message: "Lấy sản phẩm thành công", // Changed to Vietnamese
            datas: borrow,
        });
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
};

export const create = async (req, res) => {
    try {
        // Kiểm tra tính hợp lệ của dữ liệu đầu vào của Borrow
        const { error: borrowError } = borrowValid.validate(req.body);
        if (borrowError) {
            return res.status(400).json({ error: "Bad Request", message: borrowError.details[0].message });
        }

        // Kiểm tra xem dữ liệu của product_id đã được gửi từ client không
        const { user_id, product_id, borrow_date, return_date, status } = req.body;
        if (!user_id || !product_id || !borrow_date || !return_date || !status) {
            return res.status(400).json({ error: "Bad Request", message: "Missing required fields" });
        }

        // Lấy phần ngày từ chuỗi ngày giờ
        const borrowDate = borrow_date;
        const returnDate = return_date;

        // Tạo một bản ghi mới trong bảng Borrow với product_id đã được chuyển đổi
        const borrow = await Borrow.create({ user_id, product_id, borrow_date: borrowDate, return_date: returnDate, status });

        // Trả về thông báo thành công và thông tin của bản ghi mới tạo
        return res.status(201).json({ message: "Tạo mượn sách thành công", data: borrow });
    } catch (error) {
        // Xử lý ngoại lệ và trả về thông báo lỗi
        console.error("Lỗi khi tạo mượn sách:", error);
        return res.status(500).json({ error: "Internal Server Error", message: "Đã xảy ra lỗi khi tạo mượn sách" });
    }
};



export const update = async (req, res) => {
    try {
        // Kiểm tra    tính hợp lệ của dữ liệu đầu vào của Borrow
        const { error: borrowError } = borrowValid.validate(req.body);
        if (borrowError) {
            return res.status(400).json({ error: "bad Request", message: borrowError.details[0].message });
        }

        // Kiểm tra xem dữ liệu của product_id đã được gửi từ client không
        const { user_id, product_id, return_date, status } = req.body;
        if (!user_id || !product_id || !return_date || !status) {
            return res.status(400).json({ error: "Bad Request", message: "Missing required fields" });
        }

        // Tạo một bản ghi mới trong bảng Borrow với product_id đã được chuyển đổi
        const borrow = await Borrow.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });

        // Trả về thông báo thành công và thông tin của bản ghi mới tạo
        return res.status(201).json({ message: "Tạo mượn sách thành công", data: borrow });
    } catch (error) {
        // Xử lý ngoại lệ và trả về thông báo lỗi
        console.error("Lỗi khi tạo mượn sách:", error);
        return res.status(500).json({ error: "Internal Server Error", message: "Đã xảy ra lỗi khi tạo mượn sách" });
    }
};


export const remove = async (req, res) => {
    try {
        const data = await Borrow.findByIdAndDelete(req.params.id); // Changed "Product" to "Borrow"
        if(!data){
            return res.status(404).json({
                message: "Xóa sản phẩm không thành công", // Changed to Vietnamese
            });
        }
        return res.status(200).json({
            message: "Xóa sản phẩm thành công", // Changed to Vietnamese
            datas: data,
        });
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
};

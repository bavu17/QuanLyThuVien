import Product from "../models/product.js";
import { productValid } from "../validation/product.js";
import fs from 'fs';

export const index = async (req, res) => {
    fs.readFile('src/views/admin/index.html', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        // Gửi nội dung của file HTML về cho client
        res.send(data);
    });
};


export const books = async (req, res) => {
    fs.readFile('src/views/admin/books.html', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        // Gửi nội dung của file HTML về cho client
        res.send(data);
    });
};

export const news = async (req, res) => {
    fs.readFile('src/views/admin/news.html', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        // Gửi nội dung của file HTML về cho client
        res.send(data);
    });
};

export const support = async (req, res) => {
    fs.readFile('src/views/admin/support.html', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        // Gửi nội dung của file HTML về cho client
        res.send(data);
    });
};

export const login = async (req, res) => {
    fs.readFile('src/views/admin/login.html', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        // Gửi nội dung của file HTML về cho client
        res.send(data);
    });
};

export const register = async (req, res) => {
    fs.readFile('src/views/admin/register.html', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        // Gửi nội dung của file HTML về cho client
        res.send(data);
    });
};

export const admin = async (req, res) => {
    fs.readFile('src/views/admin/admin.html', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        // Gửi nội dung của file HTML về cho client
        res.send(data);
    });
};

export const adminusers = async (req, res) => {
    fs.readFile('src/views/admin/admin-users.html', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        // Gửi nội dung của file HTML về cho client
        res.send(data);
    });
};

export const adminborrow = async (req, res) => {
    fs.readFile('src/views/admin/admin-borrow.html', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        // Gửi nội dung của file HTML về cho client
        res.send(data);
    });
};


export const getAll =  async (req, res) => {
    try {
    const products = await Product.find(); 
    if(products.length === 0) {
        return res.status(404).json({
            message: "Khong tim thay san pham",
        });
    }
    return res.status(200).json({
        message: "Lay danh sach san pham thanh cong",
        datas: products,
    });
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
    
};

export const getDetail = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if(!product) {
            return res.status(404).json({
                message: "Khong tim thay san pham",
            });
        }
        return res.status(200).json({
            message: "Lay san pham thanh cong",
            datas: product,
        });
        } catch (error) {
            return res.status(500).json({
                message: error,
            });
        }
}

export const create = async (req, res) => {
    try {
        const {error} = productValid.validate(req.body);
        if(error) {
            return res.status(400).json({
                message: error.details[0].message,
            })
        }
        const product = await Product.create(req.body);
        if(!product) {
            return res.status(404).json({
                message: "Tao san pham khong thanh cong",
            });
        }
        return res.status(200).json({
            message: "Tao san pham thanh cong",
            datas: product,
        });
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
}

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

export const remove = async (req, res) => {
    try {
        const data = await Product.findByIdAndDelete(req.params.id);
        if(!data) {
            return res.status(400).json({
                message: "Xoa san pham khong thanh cong",
            });
        }
        return res.status(200).json({
            message: "Xoa san pham thanh cong", 
        })
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
}
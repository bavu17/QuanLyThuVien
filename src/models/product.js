import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
 { 
    title: {
        type: String,
        require: true,
        minLength: 3,
    }, 
    img: {
        type: String,
        require: true,
    },
    author: {
        type: String,
        require: true,
        minLength: 3,
    }, 
    publisher: {
        type: String,
        require: true,
        minLength: 3,
    }, 
    publicationYear: {
        type: Number,
        require: true,
    }, 
    genre: {
        type: String,
        require: true,
        minLength: 3,

    },
 },
 {
    timestamps: true,
    versionKey: false,
 }
);
export default mongoose.model('Product',productSchema);
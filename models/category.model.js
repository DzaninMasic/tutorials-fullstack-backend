import mongoose, { Schema } from "mongoose";

const categorySchema=new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    subCategoryIds : [{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Subcategory'
    }],
    itemIds : [{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Item'
    }]
});

const Category=mongoose.model('Category', categorySchema);

export default Category;
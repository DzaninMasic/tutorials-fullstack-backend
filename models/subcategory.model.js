import mongoose, { Schema } from "mongoose";


const subcategorySchema=new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }, 
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Category'
    }
})

const Subcategory=mongoose.model('Subcategory', subcategorySchema)

export default Subcategory
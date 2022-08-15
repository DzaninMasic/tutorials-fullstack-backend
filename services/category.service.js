import mongoose from "mongoose";
import Category from "../models/category.model"

const getOneCategory = async(id) => {
    return await Category.findOne({
        _id: mongoose.Types.ObjectId(id)
    })
}
const getAllCategories = async() => {
    return await Category.find();
}
const createOneCategory = async(data) => {
    return await Category.create({
        ...data
    })
}
const updateOneCategory = async(id, data) => {
    return await Category.updateOne({
        _id: mongoose.Types.ObjectId(id)
    }, {
        $set: {
            ...data
        }
    }, {
        upsert: true
    });
}
const deleteOneCategory = async(id) => {
    return await Category.deleteOne({
        _id: mongoose.Types.ObjectId(id)
    })
}

const categoryServiceHandler={
    getOneCategory,
    getAllCategories,
    createOneCategory,
    updateOneCategory,
    deleteOneCategory
}
export default categoryServiceHandler;

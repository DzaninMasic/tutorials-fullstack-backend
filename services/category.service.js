import mongoose from "mongoose";
import Category from "../models/category.model"

const getOneCategory = () => {}
const getAllCategories = () => {}
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
const deleteOneCategory = () => {}

const categoryServiceHandler={
    getOneCategory,
    getAllCategories,
    createOneCategory,
    updateOneCategory,
    deleteOneCategory
}
export default categoryServiceHandler;

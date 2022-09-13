import mongoose from "mongoose";
import Category from "../models/category.model"

const getOneCategory = async(id) => {
    return await Category.findOne({
        _id: mongoose.Types.ObjectId(id)
    })
}
const getAllCategories = async(page, limit) => {
    //return await Category.find().populate("subCategoryIds").populate("itemIds");
    if(!page && !limit){
        return await Category.find().populate("subCategoryIds").populate("itemIds");
    }
    let newPage = 1;
    if(page){
        newPage=page;
    }
    let newLimit = 10;
    if(limit){
        newLimit=limit;
    }
    return await Category.find().sort({name : 1}).limit(newLimit).skip((newPage-1)*newLimit).populate("subCategoryIds").populate("itemIds")
}

const countAllCategories = async () => {
    return await Category.count()
}

const createOneCategory = async(data) => {
    return await Category.create({
        ...data
    })
}
const updateOneCategory = async(id, data) => {
    await Category.updateOne({
        _id: mongoose.Types.ObjectId(id)
    }, {
        $set: {
            ...data
        }
    }, {
        upsert: true
    });
    return getOneCategory(id)
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
    deleteOneCategory,
    countAllCategories
}
export default categoryServiceHandler;

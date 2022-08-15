import mongoose from "mongoose";
import Subcategory from "../models/subcategory.model"
import Category from "../models/category.model"

const getOneSubcategory = async(id) => {
    return await Subcategory.findOne({
        _id: mongoose.Types.ObjectId(id)
    })
}

const getAllSubcategories = async() => {
    return await Subcategory.find()
}

const getSubcategoryByCategory = async(id) => {
    return await Subcategory.find({
        categoryId: mongoose.Types.ObjectId(id)
    })
}

const updateOneSubcategory = async(id, data) => {
    const { categoryId, ...restOfTheData} = data;
    let objectToUpdate = restOfTheData;
    if(categoryId){
        const cid = await validateCategory(data.categoryId);
        objectToUpdate.categoryId = cid;
    }

    return await Subcategory.updateOne({
        _id: mongoose.Types.ObjectId(id)
    }, {
        $set: {
            ...objectToUpdate
        }
    }, {
        upsert: true
    });
}

const deleteOneSubcategory = async(id) => {
    return await Subcategory.deleteOne({
        _id: mongoose.Types.ObjectId(id)
    })
}

const createOneSubcategory = async(data) => {

    const cid = await validateCategory(data.categoryId);

    return await Subcategory.create({
        ...data,
        categoryId: cid
    })
}

export const validateCategory = async(categoryId) => {
    //checks
    const category = await Category.findOne({_id: mongoose.Types.ObjectId(categoryId)})
    //validations
    if(!category) throw new Error(`Category does not exists with the id ${categoryId}`)
    return category._id
}

const subcategoryServiceHandler={
    getOneSubcategory,
    getAllSubcategories,
    updateOneSubcategory,
    deleteOneSubcategory,
    createOneSubcategory,
    getSubcategoryByCategory
}
export default subcategoryServiceHandler
import mongoose from "mongoose";
import Subcategory from "../models/subcategory.model"
import Item from '../models/item.model'
import { validateCategory } from './subcategory.service'

const getAllItems = async(page, limit) => {
    if(!page && !limit){
        return await Item.find();
    }
    let newPage = 1;
    if(page){
        newPage=page;
    }
    let newLimit = 10;
    if(limit){
        newLimit=limit;
    }
    return await Item.find().sort({name : 1}).limit(newLimit).skip((newPage-1)*newLimit).populate("subCategoryIds")
}

const countAllItems = async() => {
    return await Item.count()
}

const getOneItem = async(id) => {
    return await Item.findOne({
        _id: mongoose.Types.ObjectId(id)
    })
}

const getItemBySubcategory = async(id) => {
    return await Item.findOne({
        subCategoryId: mongoose.Types.ObjectId(id)
    })
}

const deleteOneItem = async(id) => {
    return await Item.deleteOne({
        _id: mongoose.Types.ObjectId(id)
    })
}

const createOneItem = async(data) => {
    //checks
    const cid = await validateCategory(data.categoryId);
    const scid = await validateSubCategory(data.subCategoryId);
    await validateNameOfTheItem(data.name);
    //validations
    if(data.name === '') throw new Error(`Name of the item can not be ${data.name}`);
    if(data.quantity < 0 ) throw new Error(`Quantity of the item can not be ${data.quantity}, must be greater or equal to 0`);
    if(data.price < 0 ) throw new Error(`Price of the item can not be ${data.price}, must be greater or equal to 0`);

    //create
    return await Item.create({
        ...data,
        categoryId: cid,
        subCategoryId: scid
    })
}

const updateOneItem = async(data, id) => {
    const { categoryId, subCategoryId, ...restOfTheData} = data;

    let objectToUpdate = restOfTheData;

    if(categoryId){
        const cid = await validateCategory(categoryId);
        objectToUpdate.categoryId = cid;
    }
    if(subCategoryId){
        const scid = await validateSubCategory(subCategoryId);
        objectToUpdate.subCategoryId = scid;
    }

    return await Item.updateOne({
        _id: mongoose.Types.ObjectId(id)
    }, {
        $set: {
            ...objectToUpdate
        }
    }, {
        upsert: true
    });
}

export const validateSubCategory = async(subCategoryId) => {
    //checks
    const subCategory = await Subcategory.findOne({_id: mongoose.Types.ObjectId(subCategoryId)})
    //validations
    if(!subCategory) throw new Error(`SubCategory does not exists with the id ${subCategoryId}`)
    return subCategory._id
}

export const validateNameOfTheItem = async(name) => {
    const item = await Item.findOne({
        name,
    });
    if(item !== null) throw new Error(`Name of the item can not be ${name}. That name already exists`);
    return;
}

const getItemNameAndSubcategoryName = async(id) => {
    const specialItem = await Item.findOne({
        _id: mongoose.Types.ObjectId(id)
    }).populate("subCategoryId","name").populate("categoryId","name").select("name")
    console.log('testbest', specialItem.subCategoryId.name)
    return specialItem
}

const itemServiceHandler = {
    getAllItems,
    getOneItem,
    createOneItem,
    deleteOneItem,
    updateOneItem,
    getItemBySubcategory,
    getItemNameAndSubcategoryName,
    countAllItems
}

export default itemServiceHandler
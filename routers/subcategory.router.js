import express from 'express'
import subcategoryController from '../controllers/subcategory.controller';

const subcategoryRouter=express.Router();

subcategoryRouter.route('/:id').post(subcategoryController.updateOneSubcategory)
subcategoryRouter.route('/:id').delete(subcategoryController.deleteOneSubcategory)
subcategoryRouter.route('/:id').get(subcategoryController.getOneSubcategory)
subcategoryRouter.route('/by-category/:id').get(subcategoryController.getSubcategoryByCategory)

subcategoryRouter.route('/').get(subcategoryController.getAllSubcategories)
subcategoryRouter.route('/').post(subcategoryController.createOneSubcategory)

export default subcategoryRouter
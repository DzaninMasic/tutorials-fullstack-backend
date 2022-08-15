import express from 'express'
import categoryController from '../controllers/category.controller';

const categoryRouter=express.Router();

categoryRouter.route('/:id').get(categoryController.getOneCategory);
categoryRouter.route('/:id').post(categoryController.updateOneCategory);
categoryRouter.route('/:id').delete(categoryController.deleteOneCategory);

categoryRouter.route('/').post(categoryController.createOneCategory);
categoryRouter.route('/').get(categoryController.getAllCategories);


export default categoryRouter

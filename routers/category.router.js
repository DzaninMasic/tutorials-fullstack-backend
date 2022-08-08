import express from 'express'
import categoryController from '../controllers/category.controller';

const categoryRouter=express.Router();

categoryRouter.route('/').post(categoryController.createOneCategory);
categoryRouter.route('/:id').post(categoryController.updateOneCategory);

export default categoryRouter

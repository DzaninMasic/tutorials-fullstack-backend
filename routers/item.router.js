import express from 'express'
import itemController from '../controllers/item.controller'

const itemRouter=express.Router();

itemRouter.route('/test/:id').get(itemController.getItemNameAndSubcategoryName);

itemRouter.route('/:id').get(itemController.getOneItem);
itemRouter.route('/:id').delete(itemController.deleteOneItem);
itemRouter.route('/:id').post(itemController.updateOneItem);
itemRouter.route('/:id').get(itemController.getItemBySubcategory);

itemRouter.route('/').get(itemController.getAllItems);
itemRouter.route('/').post(itemController.createOneItem);

export default itemRouter;
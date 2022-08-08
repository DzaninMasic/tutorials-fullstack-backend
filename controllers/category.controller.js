import categoryServiceHandler from "../services/category.service";

const getOneCategory = () => {}
const getAllCategories = () => {}
const createOneCategory = async(req, res) => {
    try{
        const {body} = req;
        const category = await categoryServiceHandler.createOneCategory(body);
        return res.send(category);
    }
    catch(e){
        return res.send({msg: 'Internal server error'}).status(500);
    }
}
const updateOneCategory = async(req, res) => {
    try{
        const {params, body} = req;
        const category = await categoryServiceHandler.updateOneCategory(params.id, body);
        return res.send(category);
    }
    catch(e){
        return res.send({msg: 'Internal server error'}).status(500);
    }
}
const deleteOneCategory = () => {}

const categoryController={
    getOneCategory,
    getAllCategories,
    createOneCategory,
    updateOneCategory,
    deleteOneCategory
}
export default categoryController;

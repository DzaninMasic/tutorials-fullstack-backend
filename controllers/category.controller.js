import categoryServiceHandler from "../services/category.service";

const getOneCategory = async(req, res) => {
    try{
        const {params} = req;
        const category = await categoryServiceHandler.getOneCategory(params);
        return res.send(category);
    }
    catch(e){
        return res.send({msg: 'Internal server error'}).status(500);
    }
}
const getAllCategories = async(req, res) => {
    try{
        const{page, limit} = req.query;
        const category=await categoryServiceHandler.getAllCategories(page, limit)
        //const count=await categoryServiceHandler.countAllCategories()
        return res.send(category)
    }catch(e){
        console.log("testbest", e.message)
        return res.send({msg: 'Internal server error'}).status(500)
    }
}
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
        const category = await categoryServiceHandler.updateOneCategory(params, body);
        return res.send(category);
    }
    catch(e){
        return res.send({msg: 'Internal server error'}).status(500);
    }
}
const deleteOneCategory = async(req, res) => {
    try{
        const {params} = req;
        const category = await categoryServiceHandler.deleteOneCategory(params);
        return res.send(category);
    }
    catch(e){
        return res.send({msg: 'Internal server error'}).status(500);
    }
}

const categoryController={
    getOneCategory,
    getAllCategories,
    createOneCategory,
    updateOneCategory,
    deleteOneCategory
}
export default categoryController;

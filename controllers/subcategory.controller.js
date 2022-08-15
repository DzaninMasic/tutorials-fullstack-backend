import subcategoryServiceHandler from "../services/subcategory.service";

const getOneSubcategory=async(req, res) => {
    try{
        const{params}=req;
        const subcategory=await subcategoryServiceHandler.getOneSubcategory(params)
        return res.send(subcategory)
    }catch(e){
        return res.send({msg: 'Internal server error'}).status(500);
    }
}

const getAllSubcategories=async(req, res) => {
    try{
        const subcategory=await subcategoryServiceHandler.getAllSubcategories()
        return res.send(subcategory)
    }catch(e){
        return res.send({msg: 'Internal server error'}).status(500);
    }
}

const getSubcategoryByCategory=async(req, res) => {
    try{
        const{params}=req;
        const subcategory=await subcategoryServiceHandler.getSubcategoryByCategory(params)
        return res.send(subcategory)
    }catch(e){
        return res.send({msg: 'Internal server error'}).status(500);
    }
}

const updateOneSubcategory=async(req, res) => {
    try{
        const{params, body}=req
        const subcategory=await subcategoryServiceHandler.updateOneSubcategory(params, body)
        return res.send(subcategory)
    }catch(e){
        return res.send({msg: 'Internal server error'}).status(500);
    }
}

const deleteOneSubcategory=async(req, res) => {
    try{
        const {params} = req;
        const subcategory = await subcategoryServiceHandler.deleteOneSubcategory(params);
        return res.send(subcategory);
    }
    catch(e){
        return res.send({msg: 'Internal server error'}).status(500);
    }
}

const createOneSubcategory=async(req, res) => {
    try{
        const{body}=req;
        const subcategory=await subcategoryServiceHandler.createOneSubcategory(body);
        return res.send(subcategory)
    }catch(e){
        return res.send({msg: 'Internal server error'}).status(500)
    }
}

const subcategoryController={
    getOneSubcategory,
    getAllSubcategories,
    updateOneSubcategory,
    deleteOneSubcategory,
    createOneSubcategory,
    getSubcategoryByCategory
}

export default subcategoryController
import itemServiceHandler from '../services/item.service';

const getItemNameAndSubcategoryName=async(req, res) => {
    try{
        const{params}=req;
        const item=await itemServiceHandler.getItemNameAndSubcategoryName(params)
        return res.send(item);
    }catch(e){
        return res.send({msg: 'Internal server error'}).status(500)
    }
}

const getAllItems=async(req, res) => {
    try{
        const{page, limit} = req.query;
        const item=await itemServiceHandler.getAllItems(page, limit)
        const count=await itemServiceHandler.countAllItems()
        return res.send({
            item,
            count : count
        })
    }catch(e){
        console.log("testbest", e.message)
        return res.send({msg: 'Internal server error'}).status(500)
    }
}

const getOneItem=async(req, res) => {
    try{
        const{params}=req;
        const item=await itemServiceHandler.getOneItem(params)
        return res.send(item);
    }catch(e){
        return res.send({msg: 'Internal server error'}).status(500)
    }
}

const updateOneItem=async(req, res) => {
    try{
        const {params, body} = req;
        const item=await itemServiceHandler.updateOneItem(params, body);
        return res.send(item)
    }catch(e){
        return res.send({msg: 'Internal server error'}).status(500)
    }
}

const deleteOneItem=async(req, res) => {
    try{
        const{params}=req;
        const item=await itemServiceHandler.deleteOneItem(params)
        return res.send(item);
    }catch(e){
        return res.send({msg: 'Internal server error'}).status(500)
    }
}

const createOneItem=async(req, res) => {
    try{
        const {body} = req;
        const item=await itemServiceHandler.createOneItem(body);
        return res.send(item)
    }catch(e){
        console.log('a ovo', e.message)
        return res.send({msg: 'Internal server error'}).status(500)
    }
}

const getItemBySubcategory=async(req, res) => {
    try{
        const {params} = req;
        const item=await itemServiceHandler.getItemBySubcategory(params);
        return res.send(item);
    }catch(e){
        return res.send({msg: 'Internal server error'}).status(500)
    }
}

const itemController = {
    getAllItems,
    getOneItem,
    updateOneItem,
    createOneItem,
    deleteOneItem,
    getItemBySubcategory,
    getItemNameAndSubcategoryName
}

export default itemController
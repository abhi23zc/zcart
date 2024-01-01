import { Order } from "../models/Order.js"

export const  intialise_order = async (req, res , next)=>{
    try{

        const {address, amount, products, status} = req.body;
        let id = req.user
        let order = new Order({userId:id,  products:products, address:address, amount:amount, status:status})
        await order.save();
        
        res.json({"status":"true" ,"msg":"Ordered Succesfully"})
    }catch(e){
        res.json({"status":"false" ,"msg":e})
        
    }
}

export const fetchorder = async (req, res, next)=>{

    let order = await Order.find({userId:req.user}).sort({_id:-1}) 

    res.status(200).json({"status":"true" , msg:order});
}

export const fetchsingle = async (req, res, next)=>{

    try{

        let order = await Order.findById(req.params.id);
        res.status(200).json({"status":"true" , msg:order});
    }catch(e){
        res.status(404).json({"status":"false" ,"msg":"Error while fetching order"})
    }
}
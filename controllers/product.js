import { Product } from "../models/Product.js";
import cloudinary from "cloudinary";
import getdataUri from '../utils/dataUri.js'

export const addproduct = async  ( req, res, next) => {
    const {title, description, price, category,} = req.body;
    try{

        let product = new Product({title, description, price, category, })

        const fileuri = getdataUri(req.file);
        const mycloud = await cloudinary.v2.uploader.upload(fileuri.content);

        product.poster.public_id = mycloud.public_id;
        product.poster.url = mycloud.url;
        product.userid = req.user;
        // console.log(req.user)
        await product.save()
        res.status(200).json({success:"true", msg:"Product added successfully"})
    }catch(e){
        res.status(500).json({success:"false", msg:e})
    }

}

export const deleteproduct = async (req, res, next) => {
    
    try{
        const {id} = req.body;
        await Product.deleteOne({_id:id});
        res.status(404).json({success:"true", msg:"Product deleted successfully"});
    }catch(e){
        res.status(404).json({success:"false", msg:"Error while deleting product"});
    }

}

export const fetchallproduct = async (req, res, next) => {
    
    try{

        let product = await Product.find({});  
    
        res.status(200).json({status:"true", msg:product});
        
    }catch(e){
        res.status(200).json({status:"false", msg:"Error while fetching products"});
    }
    
}

export const edit = async (req, res, next)=>{
    
    try{   

        const {id}  = req.body;
        let product = await Product.findById(id);
        product.title = req.body.title;
        product.description = req.body.description;
        product.price = req.body.price;
        product.category = req.body.category;
        await product.save();
        res.status(200).json({status:"true", "msg":product});

    }catch(e){

        res.status(404).json({status:"false", msg:"Error while updating product"});
    
    }
    
}

export const fetchproduct = async(req, res, next) =>{

    try{

        const {id} = req.body;
        console.log(req.body)
        let product = await Product.findById(id);
        res.status(200).json({status:"success", msg:product});
        
    }catch(e){
        res.status(404).json({status:"false", msg:"Error while fetching product"});
    }
}
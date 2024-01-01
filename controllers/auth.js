import {User} from "../models/User.js";
import {sendToken} from "./sendToken.js";

export const login = async (req, res, next) => {

    const {email, password} = req.body;
    let user = await User.findOne({ email: email});
    if(!user){
        res.status(401).json({status:"false", msg:"User authentication failed"})
    }
    else{
        if(user.password == password){
            sendToken(user, req, res, next);
            

        }
        else return res.status(401).json({status:"false", msg:"User authentication failed"})
    }
    
};

export const register = async (req, res, next) => {

    const {name, email, password, role} = req.body;
    let user = await User.findOne({email:email});
    if(!user){

        user = new User({name, email, password, role});
        user.avatar.public_id = "public_id";
        user.avatar.url = "url"
        await user.save();
        sendToken(user, req, res, next);
        
    }
    else{
        res.status(200).json({status:"False", msg:"User already exists"})
    }



};

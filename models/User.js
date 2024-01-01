import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:"string",
        required: true
    },
    email:{
        type:"string",
        required: true
    },
    password:{
        type:"string",
        required: true
    },
    role:{
        type: String,
        enum:["user", "admin"],
        default:"user"

    },
    avatar:{
        public_id:{
            type: String,
            required:true,
        },
        url:{
            type: String,
            required:true,
        }
    },

    createdAt:{
        type:Date,
        default:Date.now
    },

    
})

export const User = mongoose.model('User', userSchema)
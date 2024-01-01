import mongoose from "mongoose";

const OrderSchema = ({

    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
    },
    products:{
        type:Object,
        required:true,
    },
    address:{
        type:"string",
        required:true,
    },
    amount :{
        type:"number",
        required:true,
    },
    status:{
        type:"string",
        default:"Pending",
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
    
})

export const Order = mongoose.model("Order", OrderSchema);
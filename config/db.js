import mongoose from 'mongoose'

// const URI = "mongodb://127.0.0.1:27017/zcart"
const URI = "mongodb+srv://zrf:0000@cluster0.1bp1paj.mongodb.net/?retryWrites=true&w=majority"

import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: 'dl2cxd5ur', 
  api_key: '899776157934876', 
  api_secret: 'Z9q6Rluzvyxu0ju7vX689X2SS-A' 
});


export const db = async() =>{
    await mongoose.connect(URI);
    console.log("Database connection established")
}


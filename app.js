import express from 'express';
import Auth from './routes/Auths/Auth.js'
import {db} from './config/db.js';
// import {cors} from cors
import cors from "cors"
import cookieParser from 'cookie-parser';
import Product from './routes/Products/Product.js'
import Order from './routes/Orders/Order_route.js'
const PORT = process.env.PORT || 80;

const app = express();
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions))
app.use(express.Router())
app.use(express.json())
app.use(cookieParser())

// Database Connection
db()
 

try{


// Authentication routes 
app.use('/auth', Auth)

// Product routes
app.use('/product', Product)

// Order routes
app.use('/orders', Order)

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`)
})
}catch(e){
    console.log("Refreshing the application")
}
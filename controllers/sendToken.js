import jwt from 'jsonwebtoken';

export const sendToken = async(user,req, res, next,)=>{
    const token = await jwt.sign({ user: user }, 'zrfabhi');
    
    res.cookie('token', token,{
        httpOnly: true,
    })
    if(token){
        return res.send({status: 'ok', token:token});
    }
}


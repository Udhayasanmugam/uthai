import jwt from 'jsonwebtoken';
function auth(req,res,next){
    const token=req.header('X-auth-token')
    // console.log(token);
    if(!token){res.status(401).send("access denied")
} else{
     try{
        const decoded=jwt.verify(token,process.env.SECRET)
        // console.log(token)
        req.user=decoded;
        // console.log(req.user.isAdmin);
        next();
    }
    catch(error){
         return res.status(400).send("invalid token");
    }
}
    
   
}
export default auth;
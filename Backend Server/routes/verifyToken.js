const jwt = require("jsonwebtoken");

const verifyToken = (req,res,next)=>{
    const authHeader = req.headers.token;
    if (authHeader) {
        const token = authHeader;
        jwt.verify(token,process.env.SECRET_KEY,(err,user)=>{
            if(err) res.status(401).send("Token is not valid!");
            req.user = user;
            next();
        })
    }else{
        return res.status(401).send("You are not authenticated user!");
    }

}

const verifyTokenAndAuthorization = (req,res,next)=>{
        verifyToken(req,res,()=>{
            if (req.user.id === req.params.id || req.user.isAdmin) {
                next();
            }else{
        return res.status(403).json("You are not allowed to do that!");

            }
        })}

        const verifyTokenAndAdmin = (req,res,next)=>{
            verifyToken(req,res,()=>{
                if (req.user.isAdmin) {
                    next();
                    console.log("hi verifytoken");
                }else{
            return res.status(403).json("You are not allowed to do that!");
    
                }
            })}
module.exports = {verifyToken , verifyTokenAndAuthorization,verifyTokenAndAdmin};
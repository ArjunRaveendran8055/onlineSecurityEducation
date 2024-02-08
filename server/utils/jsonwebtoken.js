const jwt=require("jsonwebtoken")

const jwtSign=(obj)=>{
    
    return jwt.sign(obj,process.env.JWT_SECRET,{expiresIn:'1hr'})
}

module.exports={jwtSign}
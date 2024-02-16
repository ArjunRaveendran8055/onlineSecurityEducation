const jwt=require("jsonwebtoken")

const jwtSign=(obj)=>{
    
    return jwt.sign(obj,process.env.JWT_SECRET,{expiresIn:'1hr'})
}

const jwtVerify= (token)=>{
    try {
        const user= jwt.verify(token,process.env.JWT_SECRET)
        //console.log(user)
        return user;
    } catch (error) {
        return false
    }
}

module.exports={jwtSign,jwtVerify}
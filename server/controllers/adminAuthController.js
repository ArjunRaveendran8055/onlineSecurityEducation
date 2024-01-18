const { asyncWrapper } = require("../helpers/asyncWrapper")


const LoginController= asyncWrapper(
    async (req,res,next)=>{

        res.json({message:"hello world"})
        console.log("hit") 
    }
)

module.exports={LoginController}
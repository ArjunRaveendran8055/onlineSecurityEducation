const errorHandler=(error,req,res,next)=>{
    console.log(error.message)
    return res.status(500).json({error:"Something went Wrong."})
}

module.exports={errorHandler}
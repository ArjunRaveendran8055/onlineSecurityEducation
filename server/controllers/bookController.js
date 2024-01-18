const { asyncWrapper } = require("../helpers/asyncWrapper");
const { bookModel } = require("../models/BookModel");

const getAllBookController= asyncWrapper(
    async (req,res,next)=>{
        const {id,sort}=req.query
        console.log(id,sort,"body");
        const result=await bookModel.find({})
        res.status(200).json({data:result,status:"success"})
    }
)


module.exports={
    getAllBookController
}
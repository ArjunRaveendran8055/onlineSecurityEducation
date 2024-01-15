const express=require("express");
const { adminAuthRoute } = require("./routes/adminAuthRoute");
const { connectDb } = require("./DB/connectDb");
const app=express();


require("dotenv").config()

app.use(express.json())

app.use("/adminLogin",adminAuthRoute)

const port=process.env.PORT || 8055


const startServer = async ()=>{
    try {

        await connectDb(process.env.MONGO)
        console.log("connected to database...")
        app.listen(port, ()=>{
            console.log(`Server running at Port ${port}.`);
        })
    } catch (error) {
       console.log(error.message) 
    }
    }
    startServer()






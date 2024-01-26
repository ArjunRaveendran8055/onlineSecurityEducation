const express=require("express");
const cors=require("cors")
const { adminAuthRoute } = require("./routes/adminAuthRoute");
const { connectDb } = require("./DB/connectDb");
const { errorHandler } = require("./middleware/errorHandler");
const { bookRoute } = require("./routes/bookRoute");
const { courseRoute } = require("./routes/courseRoute");

const app=express();

require("dotenv").config()

app.use(express.json())

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

//admin Routes
app.use("/adminLogin",adminAuthRoute)

//Book Routes
app.use("/books",bookRoute)

//CourseRoutes
app.use("/courses",courseRoute)

app.use(errorHandler)



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






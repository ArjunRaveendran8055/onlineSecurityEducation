const express=require("express");
const cors=require("cors")

const { errorHandler } = require("./middleware/errorHandler");
const { bookRoute } = require("./routes/bookRoute");
const { courseRoute } = require("./routes/courseRoute");
const morgan = require("morgan");
const { adminRoute } = require("./routes/adminRoute");

const app=express();


app.use(express.json())

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))


//admin Routes
app.use("/admin",adminRoute)


//Book Routes
app.use("/books",bookRoute)

//CourseRoutes
app.use("/courses",courseRoute)

//using morgan middleware

app.use(morgan("dev"))




app.use(errorHandler)





module.exports={app}



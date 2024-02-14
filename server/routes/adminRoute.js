const { LoginController, verifyAdminController } = require("../controllers/adminController")


const adminRoute=require("express").Router()

adminRoute.post("/login",LoginController)

adminRoute.get("/verifyAdmin",verifyAdminController)

module.exports={adminRoute}
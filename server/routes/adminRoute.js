const { LoginController } = require("../controllers/adminController")


const adminRoute=require("express").Router()

adminRoute.post("/login",LoginController)

module.exports={adminRoute}
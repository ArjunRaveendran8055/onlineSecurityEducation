const { LoginController } = require("../controllers/adminAuthController")

const adminAuthRoute=require("express").Router()

adminAuthRoute.post("/login",LoginController)

module.exports={adminAuthRoute}
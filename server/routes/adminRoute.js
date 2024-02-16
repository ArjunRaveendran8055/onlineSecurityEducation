const {
  LoginController,
  verifyAdminController,
  refreshTokenAdminconTroller,
} = require("../controllers/adminController");

const adminRoute = require("express").Router();

adminRoute.post("/login", LoginController);

adminRoute.get("/verifyAdmin", verifyAdminController);
adminRoute.get("/refreshToken",refreshTokenAdminconTroller);

module.exports = { adminRoute };

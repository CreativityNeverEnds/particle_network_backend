const express = require("express");
const dotenv = require("dotenv");
const userController = require("../controllers/user.controller.js")

dotenv.config();
const router = express.Router();

router.post("/login_data", userController.loginData)
router.post("/getuserinfo", userController.getUserInfo)
router.post("/update_data", userController.updateUserInfo)
router.post("/get_name", userController.getName)
router.get("/get_all_user", userController.getAllUser)

module.exports = router;
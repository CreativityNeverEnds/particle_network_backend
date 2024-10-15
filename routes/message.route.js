const express = require("express");
const dotenv = require("dotenv");
const msgController = require("../controllers/message.controller.js")

dotenv.config();
const router = express.Router();

router.post("/save_message", msgController.saveMessage)
router.post("/get_message", msgController.getMessage)

module.exports = router;
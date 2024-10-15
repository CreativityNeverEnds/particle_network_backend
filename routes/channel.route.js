const express = require("express");
const dotenv = require("dotenv");
const chanController = require("../controllers/channel.controller.js")

dotenv.config();
const router = express.Router();

router.post("/save_new_channel", chanController.saveNewChannel)
router.get("/get_all_channel", chanController.getAllChannel)
router.post("/join_channel", chanController.joinNewChannel)
router.post("/leave_channel", chanController.leaveChannel)

module.exports = router;
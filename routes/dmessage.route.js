const express = require("express");
const dotenv = require("dotenv");
const dmsgController = require("../controllers/dmessage.controller.js")

dotenv.config();
const router = express.Router();

router.post("/create_dmessage", dmsgController.createNewDM)
router.post("/get_my_message", dmsgController.getMyDM)
router.post("/block_user", dmsgController.blockUser)

module.exports = router;
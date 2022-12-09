const express = require("express");
const { newConversation ,getConversation, findChat} = require("../controllers/conversations");
const { authUser } = require("../middlewares/auth");

const router = express.Router();

router.post("/trueshare/conversation/",newConversation)
router.get("/trueshare/conversation/:userId",getConversation)
router.get("/trueshare/conversation/find/:firstId/:secondId",findChat)

module.exports = router;

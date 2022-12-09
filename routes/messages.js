const express = require("express");
const { AddNewMessage, getMessages } = require("../controllers/messages");
const { authUser } = require("../middlewares/auth");

const router = express.Router();

router.post("/trueshare/messages", AddNewMessage);
router.get("/trueshare/messages/:conversationId", getMessages);

module.exports = router;

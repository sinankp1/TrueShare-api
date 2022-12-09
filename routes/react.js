const express = require("express");
const { reactPost, getReacts } = require("../controllers/react");
const { authUser } = require("../middlewares/auth");

const router = express.Router();
router.put("/trueshare/reactPost", authUser, reactPost);
router.get("/trueshare/getReacts/:id", authUser, getReacts);
module.exports = router;

const express = require("express");
const { adminLogin,adminRegister,getAllUsers,blockUser,getAllPosts } = require("../controllers/admin");
const { authAdmin } = require("../middlewares/auth");

const router = express.Router();

router.post("/trueshare/adminRegister", adminRegister);
router.post("/trueshare/admin/adminLogin", adminLogin);
router.get("/trueshare/admin/getAllUsers",authAdmin, getAllUsers);
router.put("/trueshare/admin/blockUser",authAdmin, blockUser);
router.get("/trueshare/admin/getAllPosts",authAdmin,getAllPosts)

module.exports = router;

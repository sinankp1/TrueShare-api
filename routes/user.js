const express = require("express");
const {
  register,
  activateAccout,
  login,
  sendVerification,
  getProfile,
  updateProfilePicture,
  addFriend,
  cancelRequest,
  follow,
  unfollow,
  acceptRequest,
  unfriend,
  deleteRequest,
  getFriendsPageInfos,
  search,
  addToSearchHistory,
  getSearchHistory,
  removeFromSearch,
  reportSubmit,
  getUser,
  getFriends,
} = require("../controllers/userController");
const { authUser } = require("../middlewares/auth");

const router = express.Router();

router.post("/trueshare/register", register);
router.post("/trueshare/activate", authUser, activateAccout);
router.post("/trueshare/login", login);
router.post("/trueshare/sendVerification", authUser, sendVerification);
router.get("/trueshare/getProfile/:username", authUser, getProfile);
router.put("/trueshare/updateProfilePicture", authUser, updateProfilePicture);
router.put("/trueshare/addFriend/:id", authUser, addFriend);
router.put("/trueshare/cancelRequest/:id", authUser, cancelRequest);
router.put("/trueshare/follow/:id", authUser, follow);
router.put("/trueshare/unfollow/:id", authUser, unfollow);
router.put("/trueshare/acceptRequest/:id", authUser, acceptRequest);
router.put("/trueshare/unfriend/:id", authUser, unfriend);
router.put("/trueshare/deleteRequest/:id", authUser, deleteRequest);
router.get("/trueshare/getFriendsPageInfos", authUser, getFriendsPageInfos);
router.post("/trueshare/search/:searchTerm", authUser, search);
router.put("/trueshare/addToSearchHistory", authUser, addToSearchHistory);
router.put("/trueshare/removeFromSearch", authUser, removeFromSearch);
router.put("/trueshare/reportSubmit", authUser, reportSubmit);
router.get("/trueshare/getSearchHistory", authUser, getSearchHistory);
router.get("/trueshare/getUser/:userId", authUser, getUser);
router.get("/trueshare/getFriends", authUser, getFriends);

module.exports = router;

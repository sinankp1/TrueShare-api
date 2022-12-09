const express = require('express');
const {createPost,getAllPost,comment,savePost,deletePost } = require('../controllers/postControllers');
const { authUser, authAdmin } = require('../middlewares/auth');

const router = express.Router();

router.post('/trueshare/createPost',authUser,createPost)
router.get('/trueshare/getAllPost',authUser,getAllPost)
router.put('/trueshare/comment',authUser,comment)
router.put('/trueshare/savePost/:id',authUser,savePost)
router.delete('/trueshare/deletePost/:id',authUser,deletePost)
router.delete('/trueshare/adminDeletePost/:id',authAdmin,deletePost)


module.exports = router
const express = require("express");
const router = express.Router();
const postCtrl = require("../controllers/post");

router.post("", postCtrl.createPost)
router.get("/allPosts", postCtrl.AllPosts);
router.put("/updatePost", postCtrl.updatePost);

module.exports = router;
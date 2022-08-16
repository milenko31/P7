const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const postController = require('../controllers/posts');

router.post('/post/:id', auth, postController.createOnePost);
router.put('/post', auth, multer, postController.modifyPost);
router.delete('/post/:id', auth, postController.deletePost);


module.exports = router;
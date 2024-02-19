const { body } = require('express-validator');

const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController.js');
const checkAuth = require('../middleware/check-auth.js');

router.post('/', checkAuth, [
    body('title').trim().isLength({min:1}).withMessage('Title is required'),
    body('content').trim().isLength({ min: 1 }).withMessage('Content is required')
],postController.createPost);
router.get('/', postController.getAllPosts);
router.get('/:id', postController.getPostById);
router.put('/:id', checkAuth, [
    body('title').trim().isLength({ min: 1 }).withMessage('Title is required'),
    body('content').trim().isLength({ min: 1 }).withMessage('Content is required')
],postController.updatePost);
router.delete('/:id', checkAuth, postController.deletePost);

module.exports = router;

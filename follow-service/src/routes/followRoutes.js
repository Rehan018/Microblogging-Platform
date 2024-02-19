const express = require('express');
const router = express.Router();
const followController = require('../controllers/followController.js');
const checkAuth = require('../middleware/check-auth.js');

router.post('/:followingId', checkAuth, followController.followUser);
router.delete('/:followingId', checkAuth, followController.unfollowUser);

module.exports = router;

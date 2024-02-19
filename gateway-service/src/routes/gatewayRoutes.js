const express = require('express');
const router = express.Router();
const gatewayController = require('../controllers/gatewayController');

router.use('/users', gatewayController.userServiceProxy);
router.use('/posts', gatewayController.postServiceProxy);
router.use('/follow', gatewayController.followServiceProxy);
router.use('/search', gatewayController.searchServiceProxy);
router.use('/notifications', gatewayController.notificationServiceProxy);
router.use('/analytics', gatewayController.analyticsServiceProxy);

module.exports = router;

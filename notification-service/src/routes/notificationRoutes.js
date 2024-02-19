const express = require('express');
const router = express.Router();
const notificationController = require('../controller/notificationController.js');

router.post('/', notificationController.createNotification);
router.get('/:userId', notificationController.getNotificationsByUser);

module.exports = router;

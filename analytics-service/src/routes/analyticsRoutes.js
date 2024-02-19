const express = require('express');
const router = express.Router();
const analyticsController = require('../controller/analyticsController');

router.post('/', analyticsController.recordAction);
router.get('/:userId', analyticsController.getAnalyticsByUser);

module.exports = router;

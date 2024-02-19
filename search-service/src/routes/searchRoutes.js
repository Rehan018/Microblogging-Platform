const express = require('express');
const router = express.Router();
const searchController = require('../controllers/searchController.js');

router.get('/', searchController.SearchUsers);

module.exports = router;

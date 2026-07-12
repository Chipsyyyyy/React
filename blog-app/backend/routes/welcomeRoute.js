const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const { getUser } = require('../controllers/welcomeController');

router.get('/welcome', verifyToken, getUser);

module.exports = router
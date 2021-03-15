const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

router.post('/signup', userCtrl);
router.post('/login', userCtrl);

module.exports = router;
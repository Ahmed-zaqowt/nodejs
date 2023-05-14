const express = require('express');
const {account , login } = require('../app/Controller/UserController');
const router = express.Router();

router.post('/account', account );
router.post('/login', login);
module.exports = router ;

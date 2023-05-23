const express = require('express');
const {  countDocumentss  } = require('../app/Controller/avgController')
const router = express.Router();


router.get('/count', countDocumentss);



module.exports = router ;

























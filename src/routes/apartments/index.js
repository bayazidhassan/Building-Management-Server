var express = require('express');
const findAll = require('../../api/apartments/findAll');

var router = express.Router()

router.get('/apartments', findAll)

module.exports = router;

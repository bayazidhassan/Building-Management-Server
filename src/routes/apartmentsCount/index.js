var express = require('express');
const countAll = require('../../api/apartments/countAll');


var router = express.Router()

router.get('/apartmentsCount', countAll)

module.exports = router;

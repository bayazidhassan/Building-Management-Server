var express = require('express')
const createToken = require('../../api/authentication/createToken')

var router = express.Router()

router.post('/jwt', createToken);

module.exports = router;

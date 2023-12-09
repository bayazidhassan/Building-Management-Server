var express = require('express');
const setUser = require('../../api/users/setUser');

var router = express.Router()

router.post('/users', setUser)

module.exports = router;

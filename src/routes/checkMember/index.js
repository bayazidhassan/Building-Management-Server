var express = require('express');
const verifyToken = require('../../middlewares/verifyToken');
const checkMember = require('../../api/member/checkMember');


var router = express.Router()

router.get('/users/member/:email', verifyToken, checkMember)

module.exports = router;

var express = require('express');
const verifyToken = require('../../middlewares/verifyToken');
const verifyAdmin = require('../../middlewares/verifyAdmin');
const getAllMembers = require('../../api/users/getAllMembers');


var router = express.Router()

router.get('/getAllMembers', verifyToken, verifyAdmin, getAllMembers)

module.exports = router;

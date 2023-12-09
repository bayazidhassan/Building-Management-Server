var express = require('express');
const verifyToken = require('../../middlewares/verifyToken');
const verifyAdmin = require('../../middlewares/verifyAdmin');
const getAllUsers = require('../../api/users/getAllUsers');


var router = express.Router()

router.get('/getAllUsers', verifyToken, verifyAdmin, getAllUsers)

module.exports = router;

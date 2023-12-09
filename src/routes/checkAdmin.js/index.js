var express = require('express');
const checkAdmin = require('../../api/admin/checkAdmin');
const verifyToken = require('../../middlewares/verifyToken');


var router = express.Router()

router.get('/users/admin/:email', verifyToken,  checkAdmin)

module.exports = router;

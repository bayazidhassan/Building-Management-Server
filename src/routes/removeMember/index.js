var express = require('express');
const verifyToken = require('../../middlewares/verifyToken');
const verifyAdmin = require('../../middlewares/verifyAdmin');
const removeMember = require('../../api/users/removeMember');



var router = express.Router()

router.patch('/removeMember/:email', verifyToken, verifyAdmin, removeMember)

module.exports = router;

var express = require('express');
const verifyToken = require('../../middlewares/verifyToken');
const verifyAdmin = require('../../middlewares/verifyAdmin');
const setMemberRole = require('../../api/users/setMemberRole');



var router = express.Router()

router.patch('/setMemberRole/:email', verifyToken, verifyAdmin, setMemberRole)

module.exports = router;

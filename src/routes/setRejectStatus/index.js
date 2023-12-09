var express = require('express');
const verifyToken = require('../../middlewares/verifyToken');
const verifyAdmin = require('../../middlewares/verifyAdmin');
const setRejectStatus = require('../../api/users/setRejectStatus');



var router = express.Router()

router.patch('/setRejectStatus', verifyToken, verifyAdmin, setRejectStatus)

module.exports = router;

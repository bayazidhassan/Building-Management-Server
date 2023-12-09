var express = require('express');
const verifyToken = require('../../middlewares/verifyToken');
const getAnnouncement = require('../../api/announcement/getAnnouncement');


var router = express.Router()

router.get('/getAnnouncement', verifyToken, getAnnouncement)

module.exports = router;

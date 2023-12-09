var express = require('express');
const verifyToken = require('../../middlewares/verifyToken');
const verifyAdmin = require('../../middlewares/verifyAdmin');
const makeAnnouncement = require('../../api/announcement/makeAnnouncement');



var router = express.Router()

router.post('/makeAnnouncement', verifyToken, verifyAdmin, makeAnnouncement)

module.exports = router;

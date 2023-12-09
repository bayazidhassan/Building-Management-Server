const jwt = require('jsonwebtoken');
const Users = require('../models/users');
require('dotenv').config();


const verifyMember = async (req, res, next) => {
    const email = req.decoded.email;
    const query = { Email: email };

    const user = await Users.findOne(query);

    const isMember = user?.Role === 'member'
    if (!isMember) {
        return res.status(403).send({ message: 'Access forbidden' })
    }
    next();
}

module.exports = verifyMember
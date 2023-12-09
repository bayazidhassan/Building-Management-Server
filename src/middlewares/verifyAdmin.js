const jwt = require('jsonwebtoken');
const Users = require('../models/users');
require('dotenv').config();


const verifyAdmin = async (req, res, next) => {
    const email = req.decoded.email;
    const query = { Email: email };

    const user = await Users.findOne(query);

    const isAdmin = user?.Role === 'admin'
    if (!isAdmin) {
        return res.status(403).send({ message: 'Access forbidden' })
    }
    next();
}

module.exports = verifyAdmin
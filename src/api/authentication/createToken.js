const jwt = require('jsonwebtoken');
require('dotenv').config();

const createToken = async (req, res) => {
    const user = req.body;
    // console.log('User for token: ', user);

    const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' })
    res.send({ token });
}

module.exports = createToken;
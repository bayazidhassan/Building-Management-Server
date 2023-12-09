const { Schema, model } = require('mongoose');

const usersSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Photo: {
        type: String,
        required: true
    },
    Role: {
        type: String,
        required: true
    }
},
    {
        versionKey: false
    }
)

const Users = model('Users', usersSchema);

module.exports = Users;
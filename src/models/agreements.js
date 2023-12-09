const { Schema, model } = require('mongoose');

const agreementsSchema = new Schema({
    apartment_id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    floor_no: {
        type: String,
        required: true
    },
    block_name: {
        type: String,
        required: true
    },
    apartment_no: {
        type: String,
        required: true
    },
    apartment_image: {
        type: String,
        required: true
    },
    rent: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    accept_date: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
},
    {
        versionKey: false
    }
)

const Agreements = model('Agreements', agreementsSchema);

module.exports = Agreements;
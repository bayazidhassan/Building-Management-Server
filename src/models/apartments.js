const { Schema, model } = require('mongoose');

const apartmentsSchema = new Schema({
    apartment_image: {
        type: String,
        required: true
    },
    floor_no: {
        type: Number,
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
    rent: {
        type: Number,
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

const Apartments = model('Apartments', apartmentsSchema);

module.exports = Apartments;
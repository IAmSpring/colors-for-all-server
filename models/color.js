const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const colorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    red: {
        type: Number,
        required: true
    },
    green: {
        type: Number,
        required: true
    },
    blue: {
        type: Number,
        required: true
    },
    hex: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Color', colorSchema);
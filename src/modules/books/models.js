const mongoose = require('mongoose');

const { Schema } = mongoose;

const bookSchema = new Schema ({
    user: {
        type: String,
        trim: true,
        required: true,
    },
    name: {
        type: String,
        trim: true,
        required: true,
    },
    authors: {
        type: Array,
        default: [],
    },
    edition: {
        type: String,
        default: '',
    },
    image: {
        type: String,
        default: ''
    },
    subject: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
    },
    deleted: {
        type: Boolean,
        default: false
    }

},{ strict: true, timestamps: true });

module.exports = mongoose.model('Book', bookSchema);

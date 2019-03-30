const mongoose = require('mongoose');

const { Schema } = mongoose;

const bookSchema = new Schema ({

    user: {
        type: String,
        trim: true
    },

    name: {
        type: String,
        trim: true,
    },

    author: {
        type: String,
        trim: true,
    },
    
    edition: {
        type: Number
    },

    image: {
        type: String

    },

    subject: {
        type: String,
    },

    price: {
        type: Number,
    },

    deleted: {
        type: boolean,
        default: false
    }

},{ strict: true, timestamps: true });

module.exports = mongoose.model('Book', bookSchema);
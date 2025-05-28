// grab the things we need
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    // Simple declaration of datatype that will be used:
    name: {
        type: String,
        required: true,
    },

    director: {
        type: String,
    },

    length: {
        type: Number,
    },

    releaseYear: {
        type: Number,
    },
    
    book: {
        type: mongoose.Schema.ObjectId,
        ref: 'Book',
        required: true
    },
    
    watched: {
        type: Boolean,
    },

    rating: {
        type: Number,
        min: 0,
        max: 5
    },

    genre: {
        type: String,
    },

    review: {
        type: String,
    },

    // You can add specifics to each one too that help with validation, like making something required, or unique
    // Add 'enum' of an array of options to force selection between a given number of options.
    // Anything other than "faculty", "staff" or "parent" will not be allowed
    // I am also setting a default to be faculty
    
    //here I am setting min/max for the number
});



module.exports = mongoose.model("Movie", movieSchema);

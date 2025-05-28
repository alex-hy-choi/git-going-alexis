// grab the things we need
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    // Simple declaration of datatype that will be used:
    title: {
        type: String,
        required: true,
    },

    director: {
        type: String,
    },

    releaseYear: {
        type: Number,
    },
    
    book: {
        type: Boolean,
        required: true
    },
    
    genre: {
        type: String,
    },

    watched: {
        type: Boolean,
    },

    rating: {
        type: Number,
        min: 0,
        max: 5
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

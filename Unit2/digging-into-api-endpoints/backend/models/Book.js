// grab the things we need
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    // Simple declaration of datatype that will be used:
    name: {
        type: String,
        required: true,
    },

    author: {
        type: String,
        required: true,
    },

    pageCount: {
        type: Number,
    },

    publicationDate: {
        type: String,
    },
    
    movie: {
        type: String,
        required: true,
    },
    
    movieWatched: {
        type: Boolean,
    },

    topic: {
        type: String,
    },

    rating: {
        type: Number,
        required: true,
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



module.exports = mongoose.model("Book", bookSchema);

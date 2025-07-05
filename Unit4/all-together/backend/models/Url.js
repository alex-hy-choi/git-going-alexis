const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const urlSchema = new Schema({
  url: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  enrichedData: {
    type: Schema.Types.Mixed,
    default: null,
  },
});

module.exports = mongoose.model('Url', urlSchema);

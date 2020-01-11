const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const matSchema = new Schema({
  matierename: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,
});

const mat = mongoose.model('mat', matSchema);

module.exports = mat;
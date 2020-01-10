const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const feliereSchema = new Schema({
  username: { type: String, required: true },
  felierename: { type: String, required: true },
  description: { type: String, required: true },
  capacity: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const  Filiere = mongoose.model('Feliere', feliereSchema);

module.exports = Filiere;
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const profSchema = new Schema({
  Matiere :{type: String, required: true},
  Nom: { type: String, required: true },
  Prenom: { type: String, required: true },
  Email: { type: String, required: true },
  Tel: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const professeur = mongoose.model('prof', profSchema);

module.exports = professeur;
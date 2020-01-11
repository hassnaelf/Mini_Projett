const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EtudiantSchema = new Schema({
  Nom: { type: String, required: true },
  Prenom: { type: String, required: true },
  CIN: { type: String, required: true },
  CNE: { type: String, required: true },
  Email: { type: String, required: true },
  Tel: { type: Number, required: true }
}, {
  timestamps: true,
});

const Etudiant = mongoose.model('Etudiant', EtudiantSchema);

module.exports = Etudiant;




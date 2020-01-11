const router = require('express').Router();
let Etudiant= require('../models/etudiant.model');

router.route('/').get((req, res) => {
  Etudiant.find()
    .then(etu => res.json(etu))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const Nom = req.body.Nom;
  const Prenom = req.body.Prenom;
  const CIN = req.body.CIN;
  const CNE = req.body.CNE; 
  const Email=req.body.Email;
  const Tel=req.body.Tel;
  const newEtudiant = new Etudiant({
    Nom,
    Prenom,
    CIN,
    CNE,
    Email,
    Tel
  });

  newEtudiant.save()
  .then(() => res.json('Etudiant added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;
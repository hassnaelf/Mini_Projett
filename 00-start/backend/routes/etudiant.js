const router = require('express').Router();
let Etudiant = require('../models/etudiant.model');

router.route('/').get((req, res) => {
  Etudiant.find()
    .then(etudiants => res.json(etudiants))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const Nom = req.body.Nom;
  const Prenom = req.body.Prenom;
  const CIN = req.body.CIN;
  const CNE = req.body.CNE;
  const   Email=req.body.Email;
  const   Tel=req.body.Tel;

  const newEudiant = new Etudiant({
    Nom,
    Prenom,
    CIN,
    CNE,
    Email,
    Tel
  });

  newEudiant.save()
  .then(() => res.json('Etudiant added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Etudiant .findById(req.params.id)
    .then(etud=> res.json(etud))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Etudiant.findByIdAndDelete(req.params.id)
    .then(() => res.json('Etudiant deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Etudiant .findById(req.params.id)
    .then(etudiant=> {
      etudiant.Nom= req.body.Nom;
      etudiant.Prenom= req.body.Prenom;
      etudiant.CIN =req.body.CIN;
      etudiant.CNE= req.body.CNE
      etudiant.Email=req.body.Email;
      etudiant.Tel=req.body.Tel;

      etudiant.save()
        .then(() => res.json('Etudiant updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
const router = require('express').Router();
let prof= require('../models/prof.model');

router.route('/').get((req, res) => {
  prof.find()
    .then(pr => res.json(pr))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
 
  const matierename= req.body.matierename;
  const Nom = req.body.Nom;
  const Prenom = req.body.Prenom;
  const Email = req.body.Email;
  const Tel= req.body.Tel;
  const date = Date.parse(req.body.date);

  const newProf = new prof({
  
    matierename,
    Nom,
    Prenom,
    Email,
    Tel,
    date,
  });

  newProf.save()
  .then(() => res.json('Professeur bien joute'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  prof.findById(req.params.id)
    .then(pr => res.json(pr))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  prof.findByIdAndDelete(req.params.id)
    .then(() => res.json('Professeur deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
 prof.findById(req.params.id)
    .then(profess => {
      profess.matierename = req.body.matierename;
      profess.Nom = req.body.Nom;
      profess.Prenom = req.body.Prenom;
      profess.Email = req.body.Email;
      profess.Tel=req.body.Tel;
      profess.date = Date.parse(req.body.date);

      prof.save()
        .then(() => res.json('Professeur updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
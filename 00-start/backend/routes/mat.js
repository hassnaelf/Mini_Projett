const router = require('express').Router();
let mat = require('../models/mat.model');

router.route('/').get((req, res) => {
  mat.find()
    .then(mats=> res.json(mats))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const matierename = req.body.matierename;

  const newmat = new mat({matierename});

  newmat.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
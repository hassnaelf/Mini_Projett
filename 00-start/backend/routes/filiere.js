const router = require('express').Router();
let Feliere= require('../models/filiere.model');

router.route('/').get((req, res) => {
  Feliere.find()
    .then(felieres => res.json(felieres))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const felierename = req.body.felierename;
  const description = req.body.description;
  const capacity = Number(req.body.capacity);  
  const date = Date.parse(req.body.date);

  const newFiliere = new Feliere({
    username,
    felierename,
    description,
    capacity,
    date,
  });

  newFiliere.save()
  .then(() => res.json('Exercise added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Feliere.findById(req.params.id)
    .then(feliere => res.json(feliere))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Feliere.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Feliere.findById(req.params.id)
    .then(feliere => {
      feliere.username = req.body.username;
      feliere.felierename = req.body.felierename;
      feliere.description = req.body.description;
      feliere.capacity = Number(req.body.capacity);
      feliere.date = Date.parse(req.body.date);

      feliere.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
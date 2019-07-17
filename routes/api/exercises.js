const express = require('express');
const router = express.Router();
const passport = require('passport');
const Exercise = require('../../models/Exercise');

router.get('/test', (req, res) => res.json({ msg: 'This is the exercises route' }));

// All exercises
router.get('/', (req, res) => {
  Exercise.find()
    .sort()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(404).json({ noexercisesfound: 'No exercises found' }));
});

// Exercise by id
router.get('/:id', (req, res) => {
  Exercise.find({ _id: req.params.id })
    .then(exercise => res.json(exercise))
    .catch(err =>
      res.status(404).json({ noexercisefound: 'No exercise found' }));
});

// Exercises by body part
// router.get('/:body_part', (req, res) => {
//   Exercise.find({ body_part: req.params.body_part })
//     .then(exercises => res.json(exercises))
//     .catch(err => 
//       res.status(404).json({ noexercisesfound: 'No exercises of that body part found' }));
// });



module.exports = router;
const express = require('express');
const router = express.Router();

const Exercise = require('../../models/Exercise');

router.get('/test', (req, res) => res.json({ msg: 'This is the exercises route' }));

// All exercises
router.get('/', (req, res) => {
  Exercise.find()
    .sort()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(404).json({ noexercisesfound: 'No exercises found' }));
});

router.get('/:body_part', (req, res) => {
  Exercise.find({ body_part: req.params.body_part })
    .then(exercises => res.json(exercises))
    .catch(err => res.status(404).json({ noexercisesfound: 'No exercises of that body part found' }));
});

module.exports = router;
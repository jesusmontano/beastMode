const express = require("express");
const router = express.Router();
const passport = require('passport');
const Workout = require('../../models/Workout');

router.get("/test", (req, res) => res.json({ msg: "This is the workouts route" }));


// Get all workouts in DB (index)
router.get('/', (req, res) => {
    Workout.find()
        .sort()
        .then(workouts => res.json(workouts))
        .catch(err => res.status(404).json({ noworkoutsfound: 'No workouts found' }));
});


// Get all workouts by user 
router.get('user/:user_id', (req, res) => {
    Workout.findByUser({ user: req.params.user_id })
        .then(workouts => res.json(workouts))
        .catch(err =>
            res.status(404).json({ noworkoutsfound: 'No workouts found from that user' }));
});


// Create a workout 
router.post('/create', (req, res) => {

    // passport.authenticate('jwt', { session: false })

    const newWorkout = new Workout({
        user: req.user.id,
        rating: req.body.rating,
        category: req.body.category,
        difficulty: req.body.difficulty,
        equipment: req.body.equipment,
        exercise1: req.body.exercise1,
        exercise2: req.body.exercise2,
        exercise3: req.body.exercise3
    });

    newWorkout
        .save()
        .then(workout => res.json(workout));
});

module.exports = router;
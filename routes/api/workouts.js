const express = require("express");
const router = express.Router();
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
router.get('/user/:user_id', (req, res) => {
    
    Workout.find({ user_id: req.params.user_id })
        .then(workouts => res.json(workouts))
        .catch(err =>
            res.status(404).json({ noworkoutsfound: 'No workouts found from that user' }));
});

// Get workout by id 
router.get('/:id', (req, res) => {
    Workout.findById(req.params.id)
        .then(workout => res.json(workout))
        .catch(err =>
            res.status(404).json({ noworkoutsfound: 'No workouts found' }));
});

// Create a workout 
router.post('/create', (req, res) => {

    const newWorkout = new Workout({
        user_id: req.body.user_id,
        rating: req.body.rating,
        category: req.body.category,
        difficulty: req.body.difficulty,
        equipment: req.body.equipment,
        exercise1_id: req.body.exercise1_id,
        exercise2_id: req.body.exercise2_id,
        exercise3_id: req.body.exercise3_id
    });

    newWorkout
        .save()
        .then(workout => res.json(workout));
});

router.patch('/:id', (req, res) => {
    Workout.findById(req.params.id)
        .then(workout => {
        workout.rating = req.body.rating;
        workout.user_id = req.body.user_id;
            workout.save().then(workout => res.json(workout)).catch(err => res.status(404).json(err));
    });
});

module.exports = router;
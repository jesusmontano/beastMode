const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  difficulty: {
    type: String,
    required: true
  },
  reps: {
    type: Number,
    min: 1,
    max: 10,
    required: true
  },
  sets: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  },
  body_part: {
    type: String,
    required: true
  },
  equipment: {
    type: String,
    required: true
  },
  instructions: {
    type: String,
    required: true
  },
  video: {
    type: String,
    required: false
  }
})

module.exports = Exercise = mongoose.model('exercises', ExerciseSchema);
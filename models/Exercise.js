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
    max: 12,
    required: true
  },
  sets: {
    type: Number,
    min: 1,
    max: 6,
    required: true
  },
  body_part: {
    type: String,
    required: true
  },
  equipment: {
    type: Boolean,
    required: true
  },
  image: {
    type: String,
    required: false
  }
})

module.exports = Exercise = mongoose.model('exercises', ExerciseSchema);
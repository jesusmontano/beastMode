const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const Exercise = require('./models/Exercise');
const fs = require('fs');
let rawdata = fs.readFileSync('./WorkoutExercises.json');
let seeds = JSON.parse(rawdata);

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    seeds.map(exercise => {
      let exerciseSeed = new Exercise({
        name: exercise["name (string)"],
        difficulty: exercise["difficulty (string)"],
        reps: exercise["reps (number)"],
        sets: exercise["sets (number)"],
        body_part: exercise["body_part (string)"],
        equipment: !!(exercise["equipment (boolean)"] === 'TRUE'),
        image: exercise["Image (string)"]
      })
      exerciseSeed.save()
    })
    console.log("Connected to mongoDB")
  })
  .catch(err => console.log(err));
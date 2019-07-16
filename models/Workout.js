const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema ({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: false
    },
    rating: {
        type: Number,
        required: false,
        default: 5
    },
    category: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        required: true
    },
    equipment: {
        type: Boolean,
        required: true 
    },
    exercise1_id: {
        type: Schema.Types.ObjectId,
        ref: 'exercises',
        required: true
    },
    exercise2_id: {
        type: Schema.Types.ObjectId,
        ref: 'exercises',
        required: true
    },
    exercise3_id: {
        type: Schema.Types.ObjectId,
        ref: 'exercises',
        required: true
    },
    // exercise4_id: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'exercises',
    //     required: false
    // },
    // exercise5_id: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'exercises',
    //     required: false
    // },
});

const Workout = mongoose.model('workout', WorkoutSchema);
module.exports = Workout;
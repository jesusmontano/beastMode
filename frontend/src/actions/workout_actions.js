import { getWorkouts, getUserWorkouts, createWorkout } from '../util/workout_api_util';

export const RECEIVE_WORKOUTS = "RECEIVE_WORKOUTS";
export const RECEIVE_USER_WORKOUTS = "RECEIVE_USER_WORKOUTS";
export const RECEIVE_NEW_WORKOUT = "RECEIVE_NEW_WORKOUT";

export const receiveWorkouts = workouts => ({
    type: RECEIVE_WORKOUTS,
    workouts
});

export const receiveUserWorkouts = workouts => ({
    type: RECEIVE_USER_WORKOUTS,
    workouts
});

export const receiveNewWorkout = workout => ({
    type: RECEIVE_NEW_WORKOUT,
    workout
});

export const fetchWorkouts = () => dispatch => (
    getWorkouts()
        .then(workouts => dispatch(receiveWorkouts(workouts)))
        .catch(err => console.log(err))
);

export const fetchUserWorkouts = id => dispatch => (
    getUserWorkouts(id)
        .then(workouts => dispatch(receiveUserWorkouts(workouts)))
        .catch(err => console.log(err))
);

export const composeWorkout = data => dispatch => (
    createWorkout(data)
        .then(workout => dispatch(receiveNewWorkout(workout)))
        .catch(err => console.log(err.response.data))
);

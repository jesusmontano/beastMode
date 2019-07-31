import { getAllExercises, getExerciseByBodyPart }
  from '../util/exercise_api_util';

export const RECEIVE_ALL_EXERCISES = 'RECEIVE_ALL_EXERCISES';
export const RECEIVE_EXERCISE = 'RECEIVE_EXERCISE';

export const receiveAllExercises = (exercises) => {
  return ({
    type: RECEIVE_ALL_EXERCISES,
    exercises: exercises
  });
};

export const receiveExercise = (exercise) => ({
  type: RECEIVE_EXERCISE,
  exercise: exercise
});

export const fetchAllExercises = () => {
  return dispatch => {
    getAllExercises()
      .then(exercises => dispatch(receiveAllExercises(exercises)))
      .catch(err => console.log(err));
  };
};

export const fetchExercise = (body_part) => {
  return dispatch => {
    getExerciseByBodyPart(body_part)
      .then(exercise => dispatch(receiveExercise(exercise)))
      .catch(err => console.log(err));
  };
};
import { RECEIVE_ALL_EXERCISES, RECEIVE_EXERCISE }
  from '../actions/exercise_actions';
import merge from 'lodash/merge';

const ExercisesReducer = (oldState = {}, action) => {
  // debugger
  let newState = Object.assign({}, oldState);
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_ALL_EXERCISES:
      newState.all = action.exercises.data;
      return newState;
    case RECEIVE_EXERCISE:
      return merge({}, oldState, { [action.exercise.id]: action.exercise.data });
    default:
      return oldState;
  };
}

export default ExercisesReducer;

import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import exercises from './exercise_reducer';
import workouts from './workouts_reducer';

const RootReducer = combineReducers({
    errors,
    session,
    exercises,
    workouts
});

export default RootReducer;
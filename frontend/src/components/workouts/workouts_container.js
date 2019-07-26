import { connect } from 'react-redux';
import { fetchWorkouts } from '../../actions/workout_actions';
import { fetchAllExercises } from '../../actions/exercise_actions';
import Workout from './workouts';

const mapStateToProps = (state) => {
    return {
        workouts: Object.values(state.workouts.all),
        exercises: state.exercises.all || [],
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchWorkouts: () => dispatch(fetchWorkouts()),
        fetchAllExercises: () => dispatch(fetchAllExercises())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Workout);
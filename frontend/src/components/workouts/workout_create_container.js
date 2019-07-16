import { connect } from 'react-redux';
import { composeWorkout } from '../../actions/workout_actions';
import { fetchWorkouts } from '../../actions/workout_actions';
import { fetchAllExercises } from '../../actions/exercise_actions';
import WorkoutCreate from './workout_create';

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.session.user,
        newWorkout: state.workouts.new,
        workouts: Object.values(state.workouts.all),
        exercises: state.exercises.all || [],
        
    };
};

const mapDispatchToProps = dispatch => {
    return {
        composeWorkout: data => dispatch(composeWorkout(data)),
        fetchWorkouts: () => dispatch(fetchWorkouts()),
        fetchAllExercises: () => dispatch(fetchAllExercises())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutCreate);
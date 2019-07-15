import { connect } from 'react-redux';
import { composeWorkout } from '../../actions/workout_actions';
import WorkoutCreate from './workout_create';

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.user,
        newWorkout: state.workouts.new
    };
};

const mapDispatchToProps = dispatch => {
    return {
        composeWorkout: data => dispatch(composeWorkout(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutCreate);
import { connect } from 'react-redux';
import { fetchWorkouts } from '../../actions/workout_actions';
import Workout from './workouts';

const mapStateToProps = (state) => {
    return {
        workouts: Object.values(state.workouts.all)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchWorkouts: () => dispatch(fetchWorkouts())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Workout);
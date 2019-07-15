import { connect } from 'react-redux';
import { fetchUserWorkouts } from '../../actions/workout_actions';
import Profile from './profile';

const mapStateToProps = (state) => {
    return {
        workouts: Object.values(state.workouts.user),
        currentUser: state.session.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserWorkouts: id => dispatch(fetchUserWorkouts(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
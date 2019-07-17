import { connect } from 'react-redux';
import { fetchUserWorkouts } from '../../actions/workout_actions';
import { fetchAllExercises } from '../../actions/exercise_actions';
import Profile from './profile';

const mapStateToProps = (state) => {
    return {
        workouts: Object.values(state.workouts.user),
        currentUser: state.session.user,
        exercises: state.exercises.all || [],
        loggedIn: state.session.isAuthenticated
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserWorkouts: id => dispatch(fetchUserWorkouts(id)),
        fetchAllExercises: () => dispatch(fetchAllExercises()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
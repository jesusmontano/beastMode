import { connect } from 'react-redux';
import { fetchAllExercises, fetchExercise }
  from '../../actions/exercise_actions';
import Exercise from './exercise';

const mapStateToProps = (state, ownProps) => {
  return ({
    exercises: state.exercises
  })
};

const mapDispatchToProps = dispatch => ({
  fetchAllExercises: () => dispatch(fetchAllExercises()),
  fetchExercise: (body_part) => dispatch(fetchExercise(body_part))
});

export default connect(mapStateToProps, mapDispatchToProps)(Exercise);
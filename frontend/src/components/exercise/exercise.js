import React from 'react';
import ExerciseItem from './exercise_item';

class Exercise extends React.Component {
  componentDidMount() {
    // debugger
    this.props.fetchAllExercises();
    // debugger
  }

  render() {
    // debugger
    if (!this.props.exercises.length) {
      return (
        <div>There are no exercises.</div>
      )
    }
    return (
      <div>
        <h1>All Exercises</h1>
        {this.props.exercises.map(exercise => (
          <ExerciseItem
            key={exercise._id}
            exercise={exercise}
          />
        ))}
      </div>
    );
  }
}

export default Exercise;
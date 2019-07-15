import React from 'react';

class ExerciseItem extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.exercise.name}</h1>
        <p>{this.props.exercise.difficulty}</p>
        <p>{this.props.exercise.reps}</p>
        <p>{this.props.exercise.sets}</p>
        <p>{this.props.exercise.body_part}</p>
        <p>{this.props.exercise.equipment}</p>
        <p>{this.props.exercise.instructions}</p>
        <p>{this.props.exercise.video}</p>
      </div>
    );
  }
}

export default ExerciseItem;
import React from 'react';

class ExerciseItem extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.exercise.name}</h1>
        <p>Difficulty: {this.props.exercise.difficulty}</p>
        <p>Reps: {this.props.exercise.reps}</p>
        <p>Sets: {this.props.exercise.sets}</p>
        <p>Body Part: {this.props.exercise.body_part}</p>
        <p>Equipment: {this.props.exercise.equipment}</p>
        <p>Instructions: {this.props.exercise.instructions}</p>
        <p>Video: {this.props.exercise.video}</p>
        <br></br>
      </div>
    );
  }
}

export default ExerciseItem;
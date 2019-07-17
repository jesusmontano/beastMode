import React from 'react';

class WorkoutShow extends React.Component {
    render() {
        let exerciseArr = [];
        this.props.exercises.forEach(exercise => {
            if (exercise._id === this.props.workout.exercise1_id || exercise._id === this.props.workout.exercise2_id || exercise._id === this.props.workout.exercise3_id){
              exerciseArr.push(exercise);
        } });
        return (
          
          <div className="workout-show-container">

            <div className="workout-show-header">
              <h1>{exerciseArr[0].body_part}</h1>
              <h1 className="workout-show-rating">Rating: {this.props.workout.rating}</h1>
            </div>
            
            <div className="workout-show-exercise">
              <p className="workout-show-exercise-name">AbsAbs AbsAbs{exerciseArr[0].name}</p>
              <img className="workout-show-image" src={exerciseArr[0].image} />
            </div>
            

            <div className="workout-show-exercise">
              <p className="workout-show-exercise-name">AbsAbs AbsAbs Abs{exerciseArr[1].name}</p>
              <img className="workout-show-image" src={exerciseArr[1].image} />
            </div>

            <div className="workout-show-exercise">
              <p className="workout-show-exercise-name">{exerciseArr[2].name}</p>
              <img className="workout-show-image" src={exerciseArr[2].image} />
            </div>  

          </div>
        );
    }
}

export default WorkoutShow;
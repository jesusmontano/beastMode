import React from 'react';

class WorkoutShow extends React.Component {
    render() {
        let exerciseArr = this.props.exercises.filter(exercise => {
            if (exercise._id === this.props.workout.exercise1_id || exercise._id === this.props.workout.exercise2_id || exercise._id === this.props.workout.exercise3_id){
                return exercise;
            } });

        return (
      
            <div>
              
                <li>
                    <div>{exerciseArr[0].body_part}</div>
                    <h1>{this.props.workout.rating}</h1>
                    <div>{exerciseArr[0].name}</div>
                    <img src={exerciseArr[0].image}/>
                    <div>{exerciseArr[1].name}</div>
                    <img src={exerciseArr[1].image}/>
                    <div>{exerciseArr[2].name}</div>
                    <img src={exerciseArr[2].image}/>
                </li>



            </div>
        );
    }
}

export default WorkoutShow;
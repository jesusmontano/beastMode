import React from 'react';
import { withRouter } from 'react-router-dom';
import WorkoutShow from './workout_show';


// workouts index 
class Workout extends React.Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {
        this.props.fetchWorkouts();
        this.props.fetchAllExercises();
    }


    render() {
        

        if (this.props.workouts.length === 0 || this.props.exercises.length === 0) {
            return (<div>No workouts yet!</div>)
        } else {
            // debugger
            return (
                <div>
                    <h2>All Workouts</h2>
                    {this.props.workouts.map(workout => (
                        <WorkoutShow key={workout.id} workout={workout} exercises={this.props.exercises}/>
                    ))}
                </div>
            );
        }
    }
}

export default withRouter(Workout);
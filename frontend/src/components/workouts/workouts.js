import React from 'react';
import { withRouter } from 'react-router-dom';
import WorkoutShow from './workout_show';


// workouts index 
class Workout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            workouts: []
        }
    }

    componentWillMount() {
        this.props.fetchWorkouts();
    }

    componentWillReceiveProps(newState) {
        this.setState({ workouts: newState.workouts });
    }

    render() {


        if (this.state.workouts.length === 0) {
            return (<div>No workouts yet!</div>)
        } else {
            return (
                <div>
                    <h2>All Workouts</h2>
                    {this.state.workouts.map(workout => (
                        <WorkoutShow key={workout.id} workout={workout} />
                    ))}
                </div>
            );
        }
    }
}

export default withRouter(Workout);
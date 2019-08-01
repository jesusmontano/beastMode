import React from 'react';
import WorkoutShow from '../workouts/workout_show';
import { Link } from 'react-router-dom';

export default class Profile extends React.Component {
    constructor( props ) {
        super( props );

        this.state = {
            workouts: []
        };
    }

    componentDidMount() {
        this.props.fetchUserWorkouts( this.props.currentUser.id );
        this.props.fetchAllExercises();
    }

    componentWillReceiveProps( newState ) {
        this.setState( { workouts: newState.workouts } );
    }

    render() {
        if ( this.props.workouts.length === 0 || this.props.exercises.length === 0 ) {
            return (
                <div className="profile-no-user-container">
                    <div className="no-user-workouts">
                        You haven't created any workouts yet!
                        <br />
                    <button id="btn-generate"><Link to="/new_workout" className="link-new-workout">Give me a Beast Workout</Link></button>
                </div>
                </div>
            );
        }
        else {
            return (
                <div className="workout-show">
                    <h2 className="workout-show-title">All of Your Workouts!</h2>
                    <ul>
                        { this.props.workouts.map( workout => (
                            <WorkoutShow
                                key={ workout._id }
                                workout={ workout }
                                exercises={ this.props.exercises }
                                fetchUserWorkouts={ this.props.fetchUserWorkouts }
                            />
                        ) ) }
                    </ul>
                </div>
            );
        }
    }
}
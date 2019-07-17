import React from 'react';
import WorkoutShow from '../workouts/workout_show';

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            workouts: []
        }
    }


    componentDidMount() {
        this.props.fetchUserWorkouts(this.props.currentUser.id);
        this.props.fetchAllExercises();
    }

    componentWillReceiveProps(newState) {
        this.setState({ workouts: newState.workouts });
    }

    render() {

        if (this.props.loggedIn === false) {
            return(
                <div>You must be logged in to view this page.</div>
            )
        }

        if (this.props.workouts.length === 0 || this.props.exercises.length === 0) {
            return (
              <div className="profile-no-user-container">
                <div className="no-user-workouts">
                  You haven't created any worksouts yet!
                </div>
              </div>
            )

        } else {
            return (
                <div>
                    <h2>All of Your Workouts!</h2>
                    <ul>
                        {this.props.workouts.map(workout => (
                            
                            <WorkoutShow key={workout._id} workout={workout} exercises={this.props.exercises}/>
                        ))}
                    </ul>
                </div>
            );
        }
    }
}


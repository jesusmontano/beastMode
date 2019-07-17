import React from 'react';
import WorkoutBox from '../workouts/workout_show';

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            workouts: []
        }
    }

    componentWillMount() {
      debugger
        console.log(this.props.currentUser.id)
        this.props.fetchUserWorkouts(this.props.currentUser.id);
    }

    componentWillReceiveProps(newState) {
      debugger
        this.setState({ workouts: newState.workouts });
    }

    render() {
      debugger
        if (this.state.workouts.length === 0) {
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
                    {this.state.workouts.map(workout => (
                        <WorkoutBox key={workout._id} workout={workout} />
                    ))}
                </div>
            );
        }
    }
}


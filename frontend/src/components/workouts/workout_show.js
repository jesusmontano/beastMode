import React from 'react';

class WorkoutShow extends React.Component {
    render() {
        return (
            <div>
                <h3>{this.props.workout.rating}</h3>
            </div>
        );
    }
}

export default WorkoutShow;
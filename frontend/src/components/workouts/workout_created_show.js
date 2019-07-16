import { connect } from 'react-redux';
import { fetchWorkouts } from '../../actions/workout_actions';
import { fetchAllExercises } from '../../actions/exercise_actions';
import Workout from './workouts';
import React from 'react';

const mapStateToProps = (state, ownProps) => {
    const workoutId = ownProps.match.params.workoutId
    return {
        workouts: Object.values(state.workouts.all) || [],
        exercises: state.exercises.all || [],
        workoutId: workoutId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchWorkouts: () => dispatch(fetchWorkouts()),
        fetchAllExercises: () => dispatch(fetchAllExercises())
    };
};



class WorkoutCreateShow extends React.Component {
    constructor(props) {
        super(props);

        this.props.fetchWorkouts();
        this.props.fetchAllExercises();
    }




    render(){

        if (this.props.workouts.length === 0 || this.props.exercises.length === 0) {
            return null;
        }
        
        // let workoutObj;

        // for (let i = 0; i < this.props.workouts.length; i++ ) {
        //     if(this.props.workouts[i]._id === this.props.workoutId) {
        //         workoutObj = this.props.workouts[i];
        //         return;
        //     }
        // }

        let workoutArr = this.props.workouts.filter(workout => {
            if (workout._id === this.props.workoutId) {
                return workout;
            }
        });

        let workoutObj = workoutArr[0];

        let exerciseArr = this.props.exercises.filter(exercise => {
            if(workoutObj.exercise1_id === exercise._id) {
                return exercise;
            } else if (workoutObj.exercise2_id === exercise._id) {
                return exercise;
            } else if (workoutObj.exercise3_id === exercise._id) {
                return exercise;
            } 
        });
       
        // debugger

        
        return(
            <div>
                <h2>{workoutObj.category}</h2>

                <h3>{workoutObj.category} Workout {workoutObj.equipment ? "with equipment" : "without equipment"}</h3>
                <br />


                <div>{exerciseArr[0].name}</div>
                <div>Do {exerciseArr[0].reps} reps for {exerciseArr[0].sets} sets</div>
                <br />

                <div>{exerciseArr[1].name}</div>
                <div>Do {exerciseArr[1].reps} reps for {exerciseArr[1].sets} sets</div>
                <br />

                <div>{exerciseArr[2].name}</div>
                <div>Do {exerciseArr[2].reps} reps for {exerciseArr[2].sets} sets</div>
                <br />
            </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(WorkoutCreateShow);
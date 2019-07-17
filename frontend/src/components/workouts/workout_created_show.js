import { connect } from 'react-redux';
import { fetchWorkouts, updateWorkout } from '../../actions/workout_actions';
import { fetchAllExercises } from '../../actions/exercise_actions';
import React from 'react';
var ObjectId = require('mongodb').ObjectID;
var mongoose = require('mongoose');

const mapStateToProps = (state, ownProps) => {
    const workoutId = ownProps.match.params.workoutId;
    const userId = state.session.user.id;

    return {
        workouts: Object.values(state.workouts.all) || [],
        exercises: state.exercises.all || [],
        workoutId: workoutId,
        userId: userId || null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchWorkouts: () => dispatch(fetchWorkouts()),
        fetchAllExercises: () => dispatch(fetchAllExercises()),
        updateWorkout: data => dispatch(updateWorkout(data)),
    };
};

class WorkoutCreateShow extends React.Component {
    constructor(props) {
        super(props);

        let workoutArr = this.props.workouts.filter(workout => {
            if (workout._id === this.props.workoutId) {
                return workout;
            }
        });

        this.state = {
            rating: "", 
            clicked: false,
            user_id: this.props.userId
        };
    

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeRating = this.handleChangeRating.bind(this);
        this.popRating = this.popRating.bind(this);
        this.on = this.on.bind(this);
    }

    popRating(e) {
        e.preventDefault();
        this.setState({clicked: true})
        this.on();
    }

    componentDidMount(){
        this.props.fetchWorkouts();
        this.props.fetchAllExercises();

    }


    handleSubmit(e) {

        let workoutArr = this.props.workouts.filter(workout => {
            if (workout._id === this.props.workoutId) {
                return workout;
            }
        });

        let workoutObj = workoutArr[0];
        workoutObj.rating = this.state.rating;
        
        if (this.state.user_id !== null) {
            workoutObj.user_id = this.state.user_id;
        }

        this.props.updateWorkout(workoutObj)
            .then((workout) => {
                return (this.props.history.push('/profile'))
            });
    }

    handleChangeRating(event) {
        this.setState({ rating: event.target.value });
    }

    on() {
    document.getElementById( "overlay" ).style.display = "block";
    }

    render(){

        if (this.state.rating !== "") {
            this.handleSubmit();
            return ""
        }

        if (this.props.workouts.length === 0 || this.props.exercises.length === 0) {
            return <div>Loading..</div>;
        }

        let workoutArr = this.props.workouts.filter(workout => {
            if (workout._id === this.props.workoutId) {
                return workout;
            }
        });

        if (workoutArr.length === 0) {
            return null;
        }

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

        return(
            <div className= "fullscreen-workout">
                <div id="overlay"></div>
                <video autoPlay loop id="background-video">
                    <source src={ process.env.PUBLIC_URL + '/image-assets/workout-background.mp4' } type="video/mp4"></source>
                </video>
                <div id="black"></div>

                <div className= "workout-container">

                <div id="workout-title">{workoutObj.category} Workout {workoutObj.equipment ? "with equipment" : "without equipment"}</div>
                <br />


                <div>{ exerciseArr[0].name } : Do { exerciseArr[0].reps } reps for { exerciseArr[0].sets } sets</div>
                <img className="exercise-img" src={exerciseArr[0].image} />

                <br />

                <div>{ exerciseArr[1].name } : Do { exerciseArr[1].reps } reps for { exerciseArr[1].sets } sets</div>
                <img className="exercise-img" src={exerciseArr[1].image} />
                <br />

                <div>{ exerciseArr[2].name } : Do { exerciseArr[2].reps } reps for { exerciseArr[2].sets } sets</div>
                <img className="exercise-img" src={exerciseArr[2].image} />

                <br />

                <button onClick={this.popRating}>Finish Workout!</button>

                <div className="rating-container">
                        <form className={this.state.clicked ? "rating-div" : "none"}>
                        <div id="rate">Rate and Save Your Workout!</div>
                            <fieldset className="rating" onChange={ this.handleChangeRating } onSubmit={ this.handleSubmit }>
                                <label className="full" for="star5" title="I feel like a beast!"></label>
                                <input type="radio" id="star5" name="rating" value="5" />
                                    
                    <label className="full" for="star4" title="Pretty good - 4 stars"></label>
                                <input type="radio" id="star4" name="rating" value="4" />
                                    
                    <label className="full" for="star3" title="Meh - 3 stars"></label>
                                <input type="radio" id="star3" name="rating" value="3" />
                                    
                    <label className="full" for="star2" title="Kinda bad - 2 stars"></label>
                                <input type="radio" id="star2" name="rating" value="2" />
                                    
                    <label className="full" for="star1" title="Sucks big time - 1 star"></label>
                                <input type="radio" id="star1" name="rating" value="1" />
                                    

                        </fieldset>
                    </form>
                </div>
            </div>
            </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(WorkoutCreateShow);

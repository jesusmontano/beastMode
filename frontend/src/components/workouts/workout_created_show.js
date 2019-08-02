import { connect } from 'react-redux';
import { fetchWorkouts, updateWorkout } from '../../actions/workout_actions';
import { fetchAllExercises } from '../../actions/exercise_actions';
import React from 'react';
var ObjectId = require('mongodb').ObjectID;
var mongoose = require('mongoose');

const mapStateToProps = (state, ownProps) => {
    const workoutId = ownProps.match.params.workoutId;

    return {
        workouts: Object.values(state.workouts.all) || [],
        exercises: state.exercises.all || [],
        workoutId: workoutId,
        userId: state.session.user ? state.session.user.id : null
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

        this.state = {
            rating: "",
            clicked: false,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeRating = this.handleChangeRating.bind(this);
        this.popRating = this.popRating.bind(this);
        this.on = this.on.bind(this);
    }

    popRating(e) {
        e.preventDefault();
        this.setState({ clicked: true });
        this.on();
    }

    componentDidMount() {
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

        if (this.props.userId !== null) {
            workoutObj.user_id = this.props.userId;
        }

        this.props.updateWorkout(workoutObj)
            .then((workout) => {
                return (this.props.history.push(`/profile/${this.props.userId}`))
            });
    }

    handleChangeRating(event) {
        this.setState({ rating: event.target.value });
    }

    on() {
        document.getElementById("overlay").style.display = "block";
    }


    render() {

        if (this.state.rating !== "") {
            this.handleSubmit();
            return "";
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
            if (workoutObj.exercise1_id === exercise._id) {
                return exercise;
            } else if (workoutObj.exercise2_id === exercise._id) {
                return exercise;
            } else if (workoutObj.exercise3_id === exercise._id) {
                return exercise;
            }
        });

        return (
            <div className="fullscreen-workout">
                <div id="overlay"></div>
                {/* <video autoPlay loop id="background-video">
                    <source src={process.env.PUBLIC_URL + '/image-assets/beast-background.mp4'} type="video/mp4"></source>
                </video> */}
                <div className="banana">
                    <div className="workout-container">
                        
                        <div id="workout-title">{workoutObj.category} Workout {workoutObj.equipment ? "With Equipment" : "Without Equipment"}</div>
                        <div className="execercise">
                        <div>{exerciseArr[0].name} :
                             <br />
                            Do {exerciseArr[0].reps} reps for {exerciseArr[0].sets} sets</div>
                            
                        <img className="exercise-img" src={exerciseArr[0].image} />
                        </div>

                        <div className="execercise">
                        <div>{exerciseArr[1].name} :
                             <br />
                            Do {exerciseArr[1].reps} reps for {exerciseArr[1].sets} sets</div>

                        <img className="exercise-img" src={exerciseArr[1].image} />
                        </div>
                        <div className="execercise">
                        <div>{exerciseArr[2].name} :
                             <br />
                            Do {exerciseArr[2].reps} reps for {exerciseArr[2].sets} sets</div>

                        <img className="exercise-img" src={exerciseArr[2].image} />
                        </div>
                    </div>
                        <button className="rating-button" onClick={this.popRating}>Finish Workout!</button>


                        <div className="rating-container">
                            <form className={this.state.clicked ? "rating-div" : "none"}>
                                <div id="rate">Rate and Save Your Workout!</div>
                                <fieldset className="rating" onChange={this.handleChangeRating} onSubmit={this.handleSubmit}>
                                    <input type="radio" id="star5" name="rating" value="5" />
                                    <label className="full" htmlFor="star5" title="I feel like a beast!"></label>

                                    <input type="radio" id="star4" name="rating" value="4" />
                                    <label className="full" htmlFor="star4" title="Pretty good - 4 stars"></label>

                                    <input type="radio" id="star3" name="rating" value="3" />
                                    <label className="full" htmlFor="star3" title="Meh - 3 stars"></label>

                                    <input type="radio" id="star2" name="rating" value="2" />
                                    <label className="full" htmlFor="star2" title="Kinda bad - 2 stars"></label>

                                    <input type="radio" id="star1" name="rating" value="1" />
                                    <label className="full" htmlFor="star1" title="Sucks big time - 1 star"></label>

                                </fieldset>
                            </form>
                            <div className={this.props.userId ? "none" : "loginToRate"}>Login to save this workout.</div>
                        </div>
                    
                </div>
            </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(WorkoutCreateShow);

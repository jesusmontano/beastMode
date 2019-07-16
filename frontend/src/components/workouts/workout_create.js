import React from 'react';
import WorkoutShow from './workout_show';
import { BrowserRouter, Route } from 'react-router-dom'

export default class WorkoutCreate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            category: "",
            fatigue: "",
            equipment: "",

  
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeCategory = this.handleChangeCategory.bind(this);
        this.handleChangeFatigue = this.handleChangeFatigue.bind(this);
        this.handleChangeEquipment = this.handleChangeEquipment.bind(this);

        this.props.fetchWorkouts();
        this.props.fetchAllExercises();
    }

  

    handleSubmit() {
        // e.preventDefault();

        let equipmentAndCategory = this.props.exercises.filter(exercise => {
            if (this.state.category === exercise.body_part && String(this.state.equipment) === exercise.equipment) {                
                return exercise;
            }
        });


        let fatiguedAdjusted = equipmentAndCategory.filter(exercise => {
            if (this.state.difficulty === 0) {
                if (exercise.difficulty === "Advanced" || exercise.difficulty === "Intermediate") {
                    return exercise;
                }
            } else if (this.state.difficulty === 1) {
                if (exercise.difficulty === "Intermediate") {
                    return exercise;
                }
            } else {
                if (exercise.difficulty === "Beginner") {
                    return exercise;
                }
            }
        });

        

        let seletctedExercises = fatiguedAdjusted.sort(() => 0.5 - Math.random()).slice(0, 3);

    
                let workout = {
                    category: this.state.category,
                    difficulty: this.state.fatigue,
                    equipment: this.state.equipment,
                    exercise1_id: seletctedExercises[0]._id,
                    exercise2_id: seletctedExercises[1]._id, 
                    exercise3_id: seletctedExercises[2]._id
                };


            this.props.composeWorkout(workout)
            .then((workout) => {
                let workoutId = workout.workout.data._id
                return (this.props.history.push(`/workout_show/${workoutId}`))
            });
            
        }

        
    

    // componentWillMount() {
    //     // this.props.fetchWorkouts();
    //     // this.props.fetchAllExercises();
    // }

    handleChangeCategory(event) {
        
        this.setState({ category: event.target.value });
    }

    handleChangeFatigue(event) {
        
        this.setState({ fatigue: event.target.value });
    }

    handleChangeEquipment(event) {
        let val;

        if (event.target.value === "yes") {
            val = true;
        } else {
            val = false;
        }
        
        this.setState({ equipment: val });
    }




    render() {

        var check = this.props.exercises
        if (this.state.category !== "" && this.state.fatigue !== ""
            && this.state.equipment !== "") {
              return(this.handleSubmit())
        }

        return (
            <div>
                
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>
                            What do you want to work out?:
                            <select value={this.state.category} onChange={this.handleChangeCategory}>
                                {/* <option name="category" defaultValue=""></option> */}
                                <option name="category" value="Arms">Arms</option>
                                <option name="category" value="Abdominals">Abdominals</option>
                                <option name="category" value="Chest">Chest</option>
                                <option name="category" value="Back">Back</option>
                                <option name="category" value="Legs">Legs</option>
                            </select>
                        </label>
                    </div>

                    <div>
                        Great, let's work out our {this.state.category}!
                        <label>
                            What's your level of fatigue?
                            <select value={this.state.fatigue} onChange={this.handleChangeFatigue}>
                                {/* <option name="fatigue" defaultValue=""></option> */}
                                <option name="fatigue" value="0">Full of energy, not fatigued at all</option>
                                <option name="fatigue" value="1">Neither</option>
                                <option name="fatigue" value="2">Very fatigued, let's take it easy</option>
                            </select>
                        </label>
                    </div>

                    <div>
                        <label>
                            Do you have access to gym equipment?
                            <select value={this.state.equipment} onChange={this.handleChangeEquipment}>
                                {/* <option name="equipment" defaultValue=""></option> */}
                                <option name="equipment" value="yes">Yes</option>
                                <option name="equipment" value="no">No</option>
                            </select>
                        </label>
                    </div>
                </form>
                <br />

                
            </div>
        )
    }
}

import React from 'react';

import WorkoutShow from './workout_show';
import { BrowserRouter, Route } from 'react-router-dom'


import WorkoutBox from './workout_show';
import {AnimateOnChange} from 'react-animation';


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
        
                let workout = {
                    category: this.state.category,
                    difficulty: this.state.fatigue,
                    equipment: this.state.equipment,
                    exercise1_id: "5d2a98851c9d44000092463a",
                    exercise2_id: "5d2b70db1c9d440000251d53", 
                    exercise3_id: "5d2cc5c61c9d440000a9c410"
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
        
        this.setState({ equipment: event.target.value });
    }




    render() {

        let equipmentAndCategory = this.props.exercises.filter(exercise => {
            if (this.state.category === exercise.category && this.state.equipment === exercise.equipment) {
                return exercise;
            }
        });

        let fatiguedAdjusted = equipmentAndCategory.filter(exercise => {
            if(this.state.difficulty === 0) {
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

        var check = this.props.exercises
        if (this.state.category !== "" && this.state.fatigue !== ""
            && this.state.equipment !== "") {
              return(this.handleSubmit())
        }

        return (
            <div className="generate-container">

                <form onSubmit={this.handleSubmit}  className="generate-form">
                    <div className={ this.state.category === "" ? "form-container category" : "slide" } value={ this.state.category }>
                        <fieldset  >
                            <legend> What do you want to work out?</legend>
                            <div className="options" onChange={ this.handleChangeCategory }>  
                                <input type="radio" name="category" value="Arms"></input><label>Arms</label>
                                <input type="radio" name="category" value="Chest"></input><label>Chest</label>
                                <input type="radio" name="category" value="Back"></input><label>Back</label>
                                <input type="radio" name="category" value="Legs"></input><label>Legs</label>
                            </div>
                        </fieldset>
                    </div>
                        {/* <legend>Great, let's work out our { this.state.category }!</legend> */}
                    <div className="form-container" className={ this.state.fatigue === "" ? "fatigue" : "slide" } value={ this.state.fatigue } onChange={ this.handleChangeFatigue }>
                    <fieldset >
                            <legend>What's your level of fatigue?</legend>
                        <div className="options">   
                            {/* <input type="radio" name="fatigue" defaultValue=""> */}
                            <input type="radio" name="fatigue" value="0"></input><label>PUMPED!</label>
                            <input type="radio" name="fatigue" value="1"></input><label>Neither</label>
                            <input type="radio" name="fatigue" value="2"></input><label>TIRED..</label>
                        </div>
                        </fieldset>
                    </div>
                    <div className="form-container" className={ this.state.equipment === "" ? "equipment" : "slide" } value={ this.state.equipment } onChange={ this.handleChangeEquipment }>
                    <fieldset >
                            {/* <input type="radio" name="equipment" defaultValue=""> */}
                            <legend>Do you have access to gym equipment?</legend>
                         <div className="options">   
                            <input id="equipment" type="radio" name="equipment" value="yes"></input><label id="equipment" >Yes</label>
                            <input id="equipment" type="radio" name="equipment" value="no"></input><label id="equipment" >No</label>
                         </div>
                        </fieldset>
                    </div>
                </form>


            </div>

        )
    }
}

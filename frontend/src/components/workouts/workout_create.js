import React from 'react';

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
    }

    componentDidMount() {
        this.props.fetchWorkouts();
        this.props.fetchAllExercises();
    }

    handleSubmit() {
        //filtering algorithm
        let equipmentAndCategory = this.props.exercises.filter(exercise => {
            if (this.state.category === exercise.body_part && this.state.equipment === exercise.equipment) {
                return exercise;
            }
        });

        while (equipmentAndCategory.length < 3) {
            this.props.exercises.filter(exercise => {
                if (exercise.body_part === "Abdominals" && exercise.equipment === false) {
                    equipmentAndCategory.push(exercise);
                }
            });
        }

        let fatiguedAdjusted = equipmentAndCategory.filter(exercise => {
            if (this.state.fatigue === "0") {
                if (exercise.difficulty === "Advanced" || exercise.difficulty === "Intermediate") {
                    return exercise;
                }
            } else if (this.state.fatigue === "1") {
                if (exercise.difficulty === "Intermediate" || exercise.difficulty === "Beginner") {
                    return exercise;
                }
            } else {
                if (exercise.difficulty === "Beginner") {
                    return exercise;
                }
            }
        });

        while (fatiguedAdjusted.length < 3) {
            this.props.exercises.filter(exercise => {
                if (exercise.body_part === "Abdominals" && exercise.equipment === false) {
                    fatiguedAdjusted.push(exercise);
                }
            });
        }


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
                let workoutId = workout.workout.data._id;
                this.props.history.push(`/workout_show/${workoutId}`);
            });
    }

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

        if (this.state.category !== "" && this.state.fatigue !== ""
            && this.state.equipment !== "") {
            (this.handleSubmit());
            return "";
        }

        return (
            <div className="generate-container">

                <form onSubmit={this.handleSubmit} className="generate-form">
                    <fieldset className={this.state.category === "" ? "category form-container" : "slide"} value={this.state.category} onChange={this.handleChangeCategory}>
                        <legend> What do you want to work out?</legend>
                        <div className="options body-parts">
                            <input type="radio" name="category" value="Arms"></input><label>Arms</label>
                            <input type="radio" name="category" value="Chest"></input><label>Chest</label>
                            <input type="radio" name="category" value="Back"></input><label>Back</label>
                            <input type="radio" name="category" value="Shoulders"></input><label>Abdominals</label>
                            <input type="radio" name="category" value="Legs"></input><label>Legs</label>
                        </div>
                    </fieldset>


                    <fieldset className={this.state.fatigue === "" ? "fatigue form-container" : "slide"} value={this.state.fatigue} onChange={this.handleChangeFatigue}>
                        <legend>What's your level of fatigue?</legend>
                        <div className="options">
                            <input type="radio" name="fatigue" value="0"></input><label>PUMPED!</label>
                            <input type="radio" name="fatigue" value="1"></input><label>Neither</label>
                            <input type="radio" name="fatigue" value="2"></input><label>TIRED..</label>
                        </div>
                    </fieldset>


                    <fieldset className={this.state.equipment === "" ? "equipment form-container" : "slide"} value={this.state.equipment} onChange={this.handleChangeEquipment} >
                        <legend>Do you have access to gym equipment?</legend>
                        <div className="options">
                            <input id="equipment" type="radio" name="equipment" value="yes"></input><label id="equipment">Yes</label>
                            <input id="equipment" type="radio" name="equipment" value="no"></input><label id="equipment">No</label>
                        </div>
                    </fieldset>
                </form>

            </div>
        )
    }
}

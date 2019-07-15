import React from 'react';
import WorkoutBox from './workout_show';

export default class WorkoutCreate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            category: "",
            fatigue: "",
            equipment: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeCategory = this.handleChangeCategory.bind(this);
        this.handleChangeFatigue = this.handleChangeFatigue.bind(this);
        this.handleChangeEquipment = this.handleChangeEquipment.bind(this);
    }

  

    handleSubmit(e) {
        e.preventDefault();
        
        if (!this.state.category === "" && !this.state.fatigue === "" 
        && this.state.equipment === "") {
            // this.props.composeWorkout(workout);
        }

        
    }

    

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

        return (
            <div>
                
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>
                            What do you want to work out?:
                            <select value={this.state.category} onChange={this.handleChangeCategory}>
                                {/* <option name="category" defaultValue=""></option> */}
                                <option name="category" value="Arms">Arms</option>
                                <option name="category" value="Shoulders">Shoulders</option>
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

                {/* <WorkoutBox category={this.state.category} fatigue={this.state.fatigue} equipment={this.state.equipment} /> */}
            </div>
        )
    }
}

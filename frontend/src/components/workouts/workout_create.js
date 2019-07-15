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
        this.handleChange = this.handleChange.bind(this);
    }

  

    handleSubmit(e) {
        e.preventDefault();
        
        // this.props.composeWorkout(workout);
    }

    

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {

        return (
            <div>
                
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>
                            What do you want to work out?:
                            <select value={this.state.category} onChange={this.handleChange}>
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
                            <select value={this.state.fatigue} onChange={this.handleChange}>
                                <option name="fatigue" value="0">Full of energy, not fatigued at all</option>
                                <option name="fatigue" value="1"></option>
                                <option name="fatigue" value="2">Very fatigued, let's take it easy</option>
                            </select>
                        </label>
                    </div>

                    <div>
                        <label>
                            Do you have access to gym equipment?
                            <select value={this.state.equipment} onChange={this.handleChange}>
                                <option name="equipment" value="yes">Yes</option>
                                <option name="equipment" value="no">No</option>
                            </select>
                        </label>
                    </div>
                </form>
                <br />

                <WorkoutBox category={this.state.category} fatigue={this.state.fatigue} equipment={this.state.equipment} />
            </div>
        )
    }
}

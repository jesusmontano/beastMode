import React from 'react';
import {Link} from 'react-router-dom';
class MainPage extends React.Component {
    render() {

        return (
            <main>
                <div id="begin">
                    <button id="btn-generate"><Link to="/new_workout" className="link-new-workout">Give me a Beast Workout</Link></button>
                    {/* <br />
                    <button id="btn-create">Create My Workout</button> */}
                </div>
                {/* <footer>
                    Copyright &copy; 2019 BeastMode
                </footer> */}
            </main>
        );
    }
}

export default MainPage;
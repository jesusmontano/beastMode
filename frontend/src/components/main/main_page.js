import React from 'react';
import {Link} from 'react-router-dom';
class MainPage extends React.Component {
    render() {

        return (
            <main>
                <div id="begin">
                    <button id="btn-generate"><Link to="/new_workout" className="link-new-workout">Give me a Beast Workout</Link></button>
                </div>
            </main>
        );
    }
}

export default MainPage;
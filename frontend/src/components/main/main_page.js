import React from 'react';
import NavContainer from '../nav/navbar_container';
class MainPage extends React.Component {

    render() {
        return (
            <main>
                {/* <NavContainer /> */}
                <div id="begin">

                    <button id="btn-generate">Give me a Beast Workout</button>
                    <br />
                    <button id="btn-create">Create My Workout</button>

                </div>
                {/* <footer>
                    Copyright &copy; 2019 BeastMode
                </footer> */}
            </main>
        );
    }
}

export default MainPage;
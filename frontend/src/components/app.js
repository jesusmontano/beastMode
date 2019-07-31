import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ExerciseContainer from './exercise/exercise_container';
import WorkoutCreateContainer from './workouts/workout_create_container';
import WorkoutCreateShow from './workouts/workout_created_show';
import ProfileContainer from './profile/profile_container';

const App = () => (
    <div>
        <NavBarContainer />
        <Switch>
            <Route exact path="/" component={MainPage} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <AuthRoute exact path="/exercises" component={ExerciseContainer} />
            <ProtectedRoute exact path="/profile" component={ProfileContainer} />
            <Route exact path="/new_workout" component={WorkoutCreateContainer} />
            <Route exact path="/workout_show/:workoutId" component={WorkoutCreateShow} />
            <ProtectedRoute exact path="/profile/:userId" component={ProfileContainer} />
        </Switch>
    </div>
);

export default App; 
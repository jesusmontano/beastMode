import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleGuestSubmit = this.handleGuestSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    // Once the user has been authenticated, redirect to the Tweets page
    componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser === true) {
            this.props.history.push('/'); // This used to be "/tweets"
        }

        // Set or clear errors
        this.setState({ errors: nextProps.errors })
    }

    // Handle field updates (called in the render method)
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    // Handle form submission
    handleSubmit(e) {
        e.preventDefault();
        let user = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.login(user);
    }

    handleGuestSubmit(e) {
        e.preventDefault();
        let user = {
            email: 'demouser@demouser.com',
            password: 'password'
        };
        this.props.login(user);
    }

    // Render the session errors if there are any
    renderErrors() {
        return (
            <ul id="error-ul">
                {Object.keys(this.state.errors).map((error, i) => (
                    <li id= "error-li" key={`error-${i}`}>
                        <img id="error-img" src={ process.env.PUBLIC_URL + '/image-assets/exclamation-white.png' } />{this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="session-form-container" >
                <form onSubmit={this.handleSubmit}>
                    <div className="login-form" style={ { backgroundImage: `url(require('../image-assets/victor-freitas-Ovlel6acNac-unsplash.jpg'))` } }>
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email"
                        />
                        <br />
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                        />
                        <br />
                        <div className="buttons">
                        <input id="submit-button" type="submit" value="Login" />
                        <input id="demo-login" onClick={ this.handleGuestSubmit } type="submit" value="Demo Login" />
                        </div>
                         { this.renderErrors() }
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(LoginForm);
import React from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
        this.props.history.push('/');
    }

    // Selectively render links dependent on whether the user is logged in
    getLinks() {
        if (this.props.loggedIn) {
            return (
                <div className="session-links">
                    {/* <Link to={'/tweets'}>All Tweets</Link> */}
                    <Link className="nav-links" to={'/profile'}>Profile</Link>
                    {/* <Link to={'/new_tweet'}>Write a Tweet</Link> */}
                    <button className="nav-links" onClick={this.logoutUser}>Logout</button>
                </div>
            );
        } else {
            return (
                <div className="session-links">
                    <Link className="nav-links" to={'/signup'}>Signup</Link>
                    <Link className="nav-links" to={'/login'}>Login</Link>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="nav">
                <Link to="/">
                  <img id="logo" src={process.env.PUBLIC_URL + '/image-assets/logo-white.png'} />
                  <h1 id="logo-str">BEASTMODE</h1>
                </Link>
                {/* <img id="menu" src="../image-assets/menu-white.png" alt="menu"> */}
                {this.getLinks()}
            </div>
        ); 
    }
}

export default withRouter( NavBar);
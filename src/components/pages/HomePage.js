import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import React, {Component} from 'react';
import { logout, getUserCredentials } from '../../actions/auth.js';
import PropTypes from 'prop-types';

class HomePage extends Component {
    render() {
        const {isAuthenticated, getUserCredentials, logout } = this.props;
        const { store } = this.context;
        const user = {}; 
        store.subscribe(() => {
          user.email = store.getState().user.email;
        })
        store.dispatch(getUserCredentials());

        return (
            <div>
                    <h1>HomePage</h1>
                    <div>My login: {user.email} </div>
                { isAuthenticated ?  
                    (
                        <div>
                            <button onClick={() => logout()}>Logout</button>
                            <Link to="/dashboard">My cabinet</Link>
                        </div>
                    ) :
                    (
                        <div>
                            <Link to="/login">Login</Link> or <Link to="/signup">Signup </Link>
                        </div>
                    ) 
                }
            </div>
        );
    }

}

const mapStateToProps = (state) => {
	return {isAuthenticated: !!state.user.token };
} 

HomePage.propTypes = {
  getUserCredentials: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  getUserCredentials: PropTypes.func.isRequired,
}
HomePage.contextTypes = {
  store: PropTypes.object.isRequired
}


export default connect(mapStateToProps, { logout, getUserCredentials })(HomePage);
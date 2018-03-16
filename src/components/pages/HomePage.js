import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth.js';

const HomePage = ({isAuthenticated, logout}) => {
    return (
        <div>
        		<h1>HomePage</h1>
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

const mapStateToProps = (state) => {
	return {isAuthenticated: !!state.user.token };
} 

export default connect(mapStateToProps, { logout })(HomePage);
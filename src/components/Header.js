import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/Header.css';

const Header = (props) => {
    const { isAuthenticated, logout } = props;
    return(
        <header>
            <section className="header">
                <Link className="logo" to="/">SportBet</Link>
                { isAuthenticated ? (
				<div className="registered">                    
                    <Link className="dashboard" to="/dashboard">Dashboard</Link>
                    <button className="logout__button" onClick={() => logout()}>Logout</button>                    
				</div>
                    
                ) : (
                    <div className="authorization">
                        <Link className="login" to="/login">Login</Link>
                        <Link  className="signup" to="/signup">Signup </Link>
                    </div>
                )}
			</section>
        </header>
    );
}
 
export default Header;
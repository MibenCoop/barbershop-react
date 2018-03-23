import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/Header.css';

const Header = () => {
    return(
        <header>
            <section className="header">
                <Link className="logo" to="/">SportBet</Link>
				<div className="authorization">
                    <Link className="login" to="/login">Login</Link>
                    <Link  className="signup" to="/signup">Signup </Link>
				</div>
			</section>
        </header>
    );
}
 
export default Header;
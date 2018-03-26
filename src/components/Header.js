import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/Header.css';

const Header = (props) => {
    const { isAuthenticated, logout, history } = props;
    console.log('history', props.history);
    return(
        <header>
            <section className="header">
                <Link className="logo" to="/">СпортБет</Link>
                { isAuthenticated ? (
				<div className="authorization">                    
                    <Link className="authorization__dashboard" to="/dashboard">Личный кабинет</Link>
                    <button 
                        className="logout__button" 
                        onClick={() => { 
                            logout();
                            history.push('/');
                        }}
                    >
                        Выйти
                    </button>                    
				</div>
                    
                ) : (
                    <div className="authorization">
                        <Link className="login" to="/login">Войти</Link>
                        <Link  className="signup" to="/signup">Зарегистрироваться </Link>
                    </div>
                )}
			</section>
        </header>
    );
}
 
export default Header;
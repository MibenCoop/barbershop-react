import React from 'react';
import InlineError from '../messages/InlineError.js'
import BlockError from '../messages/BlockError.js'
import {Link} from 'react-router-dom'

 const SignupForm = (props) => {
    const { user, change, submit, errors } = props;

    return(
        <div className="signup-page">
            <div className="form">
                <form className="login-form" onSubmit={submit}>
                    <label htmlFor="email">
                        Почта:
                    </label>
                    <input
                        required 
                        onChange={change}
                        placeholder="example@example@.com" 
                        type="email" name="email" 
                        value={user.email}
                    />
                    <InlineError error={errors.email}/><br/>
                    <label htmlFor="username">
                        Имя пользователя:
                    </label>
                    <input
                        required 
                        onChange={change}
                        placeholder="user" 
                        type="username" name="username" 
                        value={user.username}
                    />
                    <InlineError error={errors.username}/><br/>
                    <label htmlFor="password">
                        Пароль:
                    </label>
                    <input
                        required 
                        onChange={change}
                        placeholder=" " 
                        type="password" name="password" 
                        value={user.password}
                    />
                    <InlineError error={errors.password}/><br/>
                    <button>Зарегистрироваться</button>
                    <p className="message">
                    Есть аккаунт? 
                    <Link to="/login">Войти в аккаунт</Link>
                    </p>
                    <BlockError error={errors.global}/>
                </form>  
            </div>
        </div>   
    );
}

export default SignupForm;
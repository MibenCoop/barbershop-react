import React from 'react';
import {Link} from 'react-router-dom'
import InlineError from '../messages/InlineError.js'
import BlockError from '../messages/BlockError.js'
import '../../styles/LoginForm.css'
 const LoginForm = (props) => {
    const { user, change, submit, errors } = props;
    return(
        <div className="login-page">
            <div className="form">
                <form className="login-form" onSubmit={submit}>
                    <label htmlFor="email">
                        Почта:
                    </label>
                    <input 
                        required 
                        onChange={change}
                        placeholder="email@email.ru" 
                        type="email" name="email" 
                        value={user.email}
                    />
                    <InlineError error={errors.email} /><br/>
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
                    <InlineError error={errors.password} /><br/>
                    <button>Войти</button>
                    <p className="message">Не зарегистрированы? 
                    <Link to="/signup">Создать аккаунт</Link>
                    </p>
                    <BlockError error={errors.global} />
                </form>    
            </div>
        </div>
    );
}

export default LoginForm;
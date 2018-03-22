import React from 'react';
import InlineError from '../messages/InlineError.js'
import BlockError from '../messages/BlockError.js'

 const LoginForm = (props) => {
    const { user, change, submit, errors } = props;
    return(
        <form onSubmit={submit}>
            <label htmlFor="email">
                Email:
            </label>
            <input 
                onChange={change}
                placeholder="email@email.ru" 
                type="email" name="email" 
                value={user.email}
            />
            <InlineError error={errors.email} /><br/>
            <label htmlFor="password">
                Password:
            </label>
            <input 
                onChange={change}
                placeholder=" " 
                type="password" name="password" 
                value={user.password}
            />
            <InlineError error={errors.password} /><br/>
            <button>Войти</button>
            <BlockError error={errors.global} />
        </form>    
    );
}

export default LoginForm;
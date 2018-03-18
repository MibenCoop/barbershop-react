import React, { Component } from 'react';
import InlineError from './messages/InlineError.js'
import BlockError from './messages/BlockError.js'

 const SignupForm = (props) => {
    const { user, change, submit, errors } = props;
    console.log('user', user);

    return(
        <form onSubmit={submit}>
            <label htmlFor="email">
                Email:
            </label>
            <input 
                onChange={change}
                placeholder="example@example@.com" 
                type="email" name="email" 
                value={user.email}
            />
            <InlineError error={errors.email}/><br/>
            <label htmlFor="username">
                Username:
            </label>
            <input 
                onChange={change}
                placeholder="user" 
                type="username" name="username" 
                value={user.username}
            />
            <InlineError error={errors.username}/><br/>
            <label htmlFor="password">
                Password:
            </label>
            <input 
                onChange={change}
                placeholder=" " 
                type="password" name="password" 
                value={user.password}
            />
            <InlineError error={errors.password}/><br/>
            <button>Войти</button>
            <BlockError error={errors.global}/>
        </form>     
    );
}

export default SignupForm;
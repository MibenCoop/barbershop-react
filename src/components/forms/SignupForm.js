import React, { Component } from 'react';
import PropTypes from 'prop-types';
import validator from 'validator'
import InlineMessage from '../messages/InlineMessage.js'
export default class Signup extends Component {
    state = {
        data: {
            email: "",
            username: "",
            password: "",
        },
        errors: {},
    };
    onSubmit = (event) => {
        event.preventDefault();
        const errors = this.validate(this.state.data);
        console.log('erros', errors);
        this.setState({ errors });
        if ( Object.keys(errors).length === 0) {
            this.props.submit(this.state.data)
                      .catch(err => 
                        this.state({errors: err.respone.data.errors})
                    );
        }
    }

    onChange = (e) => {
            this.setState({ 
                ...this.state,
                data: {...this.state.data, [e.target.name]: e.target.value} 
            });
    }

    validate = (data) => {
        const errors = {};
        if (!validator.isEmail(data.email)) errors.email = "Invalid email";
        if (!data.username) errors.username = "Blank usernames";
        if (!data.password) errors.password = "Blank password";
        console.log('dataValid');
        return errors;
    }

    render() {
        const { data, errors } = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <label htmlFor="email">
                    Email:
                </label>
                <input 
                    onChange={this.onChange}
                    placeholder="example@example.com" 
                    type="email" name="email" 
                    value={data.login}
                />
                <InlineMessage error={errors.email}/>
                <br/>
                <label htmlFor="username">
                    Username:
                </label>
                <input 
                    onChange={this.onChange}
                    placeholder="" 
                    type="username" name="username" 
                    value={data.login}
                />
                <InlineMessage error={errors.username}/>
                <br/>
                <label htmlFor="password">
                    Password:
                </label>
                <input 
                    onChange={this.onChange} 
                    placeholder="" 
                    type="password" 
                    name="password" 
                    value={data.password}
                />
                <InlineMessage error={errors.password}/>
                <br/>
                <button>Войти</button>
            </form>        
        );
    }
};

Signup.propTypes = {
    submit: PropTypes.func.isRequired
}
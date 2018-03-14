import React, { Component } from 'react';
import PropTypes from 'prop-types';
import validator from 'validator'
import InlineError from '../messages/InlineError.js'
import BlockError from '../messages/BlockError.js'

export default class LoginForm extends Component {
    state = {
        data: {
            email: "",
            password: "",
        },
        errors: {},
    };
    onSubmit = (event) => {
        event.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        if ( Object.keys(errors).length === 0  ) {
            this.props.submit(this.state.data)
                    .catch(err => this.setState({errors: err.response.data.errors}));
        }        
    }

    onChange = e => 
            this.setState({ 
                data: {...this.state.data, [e.target.name]: e.target.value} 
            });
    validate = (data) => {
        const errors = {};
        if (!validator.isEmail(data.email)) errors.email = "Invalid email";
        if (validator.isEmpty(data.password)) errors.password = "Blank password";
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
                /><InlineError error = {errors.email}/><br/>
                <label htmlFor="password">
                    Password:
                </label>
                <input 
                    onChange={this.onChange} 
                    placeholder="" 
                    type="password" 
                    name="password" 
                    value={data.password}
                /><InlineError error = {errors.password}/><br/>
                <button>Войти</button>
                <BlockError error = {errors.global} />
            </form>        
        );
    }
};

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired
}
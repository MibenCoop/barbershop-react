import React, { Component } from 'react';
import {connect } from 'react-redux'
import PropTypes from 'prop-types';
import validator from 'validator'
import SignupForm from '../components/forms/SignupForm.js'
import { signup } from '../actions/signup.js'

class SignupPage extends Component {
    constructor(props) {
		super(props);
        this.state = {
            data: {
                email: "",
                username: "",
                password: "",
            },
            errors: {},
        }
    }
    onSubmit = (event) => {
        event.preventDefault();
        const { signup } = this.props;
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        if ( Object.keys(errors).length === 0) {
            signup(this.state.data)
                .then(() => this.props.history.push("/dashboard"))
                .catch(err => this.setState({errors: err.response.data.errors}));
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
        if (!validator.isEmail(data.email)) errors.email = "Неправильная почта";
        if (validator.isEmpty(data.username)) errors.username = "Заполните пользователя";
        if (validator.isEmpty(data.password)) errors.password = "Заполните пароль";
        return errors;
    }
    render() {
        return (
            <SignupForm 
                submit = {this.onSubmit}
                change = {this.onChange}
                user = {this.state.data}
                errors = {this.state.errors}
            />   
        );
    }
}
 
SignupPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    signup: PropTypes.func.isRequired
}

export default connect(null, {signup})(SignupPage);
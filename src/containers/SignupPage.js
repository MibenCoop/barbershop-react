import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect } from 'react-redux'
import InlineError from '../components/messages/InlineError.js'
import BlockError from '../components/messages/BlockError.js'
import SignupForm from '../components/SignupForm.js'
import validator from 'validator'
import { signup } from '../actions/signup.js'

class SignupPage extends Component {
    state = {
        data: {
            email: "",
            username: "",
            password: "",
        },
        errors: {},
    };
    onSubmit = (event) => {
        const { signup } = this.props;
        event.preventDefault();
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
        if (!validator.isEmail(data.email)) errors.email = "Invalid email";
        if (validator.isEmpty(data.username)) errors.username = "Blank usernames";
        if (validator.isEmpty(data.password)) errors.password = "Blank password";
        return errors;
    }
    render() {
        const { data, errors } = this.state;
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
}

export default connect(null, {signup})(SignupPage);
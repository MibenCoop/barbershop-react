import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect } from 'react-redux'
import InlineError from '../components/messages/InlineError.js'
import BlockError from '../components/messages/BlockError.js'
import LoginForm from '../components/LoginForm.js'
import validator from 'validator'
import { login } from '../actions/auth.js'

class LoginPage extends Component {
	state = {
		data: {
			email: "",
			password: "",
		},
		errors: {},
	};

	onSubmit = (event) => {
		const { login } = this.props;
		event.preventDefault();
		const errors = this.validate(this.state.data);
		this.setState({ errors });
		if ( Object.keys(errors).length === 0  ) {
			login(this.state.data)
				.then(() => this.props.history.push("/dashboard"))
				.catch(err => this.setState({errors: err.response.data.errors}));
		}        
	}

	onChange = e => {
		this.setState({ 
			data: {...this.state.data, [e.target.name]: e.target.value} 
		});
	}

	validate = (data) => {
		const errors = {};
		if (!validator.isEmail(data.email)) errors.email = "Invalid email";
		if (validator.isEmpty(data.password)) errors.password = "Blank password";
		return errors;
	}

	render() {
		const { data, errors } = this.state;
		return (
				<LoginForm 
					submit = {this.onSubmit}
					change = {this.onChange}
					user = {this.state.data}
					errors = {this.state.errors}
				/>
		);
	}
};

export default connect(null, {login})(LoginPage);
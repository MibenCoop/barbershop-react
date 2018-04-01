import React, { Component } from 'react';
import {connect } from 'react-redux'
import PropTypes from 'prop-types'
import validator from 'validator'
import LoginForm from '../components/forms/LoginForm.js'
import { login } from '../actions/auth.js'

class LoginPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {
				email: "",
				password: "",
			},
			errors: {},
		};
	}
	onSubmit = (event) => {
		event.preventDefault();
		const { login } = this.props;
		const errors = this.validate(this.state.data);
		this.setState({ errors });
		if ( Object.keys(errors).length === 0  ) {
			login(this.state.data)
				.then(() => this.props.history.push("/"))
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
		if (!validator.isEmail(data.email)) errors.email = "Неправильная почта";
		if (validator.isEmpty(data.password)) errors.password = "Заполните пароль";
		return errors;
	}

	render() {
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

LoginPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    login: PropTypes.func.isRequired
}

export default connect(null, {login})(LoginPage);
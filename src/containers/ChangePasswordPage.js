import React, { Component } from 'react';
import {connect } from 'react-redux'
import PropTypes from 'prop-types'
import validator from 'validator'
import { changePassword } from '../actions/auth.js'
import ChangePasswordForm from '../components/forms/ChangePasswordForm'

class ChangePasswordPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {
                oldPassword: "",
                newPassword: "",
                newPasswordConfirm: "",
			},
			errors: {},
		};
	}
	onSubmit = (event) => {
		event.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        const { changePassword } = this.props;        
 		if ( Object.keys(errors).length === 0  ) {
			changePassword(this.state.data)
				.then(() => this.props.history.push("/login"))
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
		if (validator.isEmpty(data.oldPassword)) errors.oldPassword = "Заполните пароль";
		if (data.newPassword !== data.newPasswordConfirm) {
			errors.newPassword = "Пароли не совпадают";
			errors.newPasswordConfirm = "Пароли не совпадают";
		}
		if (data.oldPassword === data.newPassword) {
			errors.oldPassword = "Пароли совпадают";
			errors.newPassword = "Пароли совпадают";
		}
		return errors;
	}

	render() {
		return (
			<ChangePasswordForm 
				submit = {this.onSubmit}
				change = {this.onChange}
				user = {this.state.data}
				errors = {this.state.errors}
			/>
		);
	}
};

ChangePasswordPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
}

export default connect(null, { changePassword } )(ChangePasswordPage);
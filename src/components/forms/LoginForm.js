import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class LoginForm extends Component {
    state = {
        data: {
        email: "",
        password: "",
        },
        errors: {},
    };
    onSubmit = (e) => {
        console.log('submit');
        this.props.submit(this.state.data);
    }

    onChange = (e) => {
            console.log(this.state.data);
            this.setState({ 
                data: {...this.state.data, [e.target.name]: e.target.value} 
            });
            console.log('change', e.target.value);
    }
    render() {
        const { data, errors } = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <label for="email">
                    Email:
                </label>
                <input 
                    onChange={this.onChange}
                    placeholder="example@example.com" 
                    type="email" name="email" 
                    value={data.login}
                /><br/>
                <label for="password">
                    Password:
                </label>
                <input 
                    onChange={this.onChange} 
                    placeholder="" 
                    type="password" 
                    name="password" 
                    value={data.password}
                /><br/>
                <button>Войти</button>
            </form>        
        );
    }
};

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired
}
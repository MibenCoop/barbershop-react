import React, {Component} from 'react'
import LoginForm from '../forms/LoginForm'
import { connect } from 'react-redux'
// import { login } from '../../actions/auth'
import PropTypes from 'prop-types';

class LoginPage extends Component {
    submit = (data) => {
        console.log('this.props', this.props);
    }
    render() {
        return (
            <div> 
                LoginPage
                <LoginForm submit={this.submit}/>
            </div>
        );
    };
}
 
LoginPage.propTypes = {
    login: PropTypes.func.isRequired
}

export default LoginPage;
import React, {Component} from 'react'
import LoginForm from '../forms/LoginForm'
import { connect } from 'react-redux'
import { login } from '../../actions/auth'
import PropTypes from 'prop-types';
import api from '../../api'


class LoginPage extends Component {
    submit = data => 
        this.props.login(data).then(() => this.props.history.push("/"));
        
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
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    login: PropTypes.func.isRequired
}

export default connect(null, {login})(LoginPage);
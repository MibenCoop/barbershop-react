import React, {Component} from 'react'
import TicketForm from '../forms/TicketForm'
import { connect } from 'react-redux'
// import { login } from '../../actions/auth'
import { Link} from 'react-router-dom'
import PropTypes from 'prop-types'

class DashboardPage extends Component {
    render() {
        return (
            <div> 
                DashboardPage<br/>
                <Link to='/bookTicket'>Booked time and date for visit</Link>
            </div>
        );
    };
}
 
DashboardPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
}

export default DashboardPage;
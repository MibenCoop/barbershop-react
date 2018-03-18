import React, {Component} from 'react'
import TicketForm from '../forms/TicketForm'
import { connect } from 'react-redux'
// import { login } from '../../actions/auth'
import { Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import TicketsListPage from './TicketsListPage.js'

class DashboardPage extends Component {
    render() {
        console.log('tickets', this.props.tickets)
        return (
            <div> 
                DashboardPage<br/>
                <Link to='/bookTicket'>Booked time and date for visit</Link>
                <TicketsListPage />
            </div>
        );
    };
}
 
DashboardPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
}

const mapStateToProps = state => ({
    tickets: state.ticket
});

export default connect(mapStateToProps, null)(DashboardPage);
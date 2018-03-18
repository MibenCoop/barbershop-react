import React, {Component} from 'react'
// import TicketForm from '../forms/TicketForm'
import { connect } from 'react-redux'
// import { login } from '../../actions/auth'
import { Link} from 'react-router-dom'
import { getTickets } from "../actions/bookTickets.js";
import PropTypes from 'prop-types'
import TicketsListPage from './TicketsListPage.js'

class DashboardPage extends Component {
    componentDidMount = () => {
        const { getTickets } = this.props;
        getTickets();
    }

    render() {
        return (
            <div> 
                DashboardPage<br/>
                <Link to='/bookTicket'>Booked time and date for visit</Link>
                <TicketsListPage/>
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


export default connect(mapStateToProps, {getTickets})(DashboardPage);
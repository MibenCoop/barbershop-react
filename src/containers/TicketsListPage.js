import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import TicketItem from '../components/TicketItem'

const TicketsListPage = ({history, tickets}) => {

    const ticketItems = tickets.map(ticket => (
        <TicketItem key={String(ticket._id)} value={ticket}/>)
    );
    return (
        <ul>
            {ticketItems}
        </ul>
    );
}
 
TicketsListPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    tickets: PropTypes.arrayOf(
        PropTypes.shape({
          _id: PropTypes.string.isRequired,
          time: PropTypes.string.isRequired,
          date: PropTypes.string.isRequired,
          userId: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
}

const mapStateToProps = state => ({
    tickets: state.ticket
})



export default connect(mapStateToProps, null)(TicketsListPage);
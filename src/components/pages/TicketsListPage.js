import React, {Component} from 'react'
import { connect } from 'react-redux'
// import { login } from '../../actions/auth'
import PropTypes from 'prop-types'
import TicketItemPage from './TicketItemPage'

const TicketsListPage = ({history, tickets}) => {
    // let tickets = {}; 
    // const { store } = this.context;
    // store.subscribe(() => {
    //   tickets = store.getState().ticket;
    //   console.log('sub', store.getState().ticket)
    // })
    const ticketItems = tickets.map(ticket => {
        <TicketItemPage key={ticket._id} value={ticket.date}/>
    })
    return (
        <ul>
            1
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
          _id: PropTypes.number.isRequired,
          time: PropTypes.string.isRequired,
          date: PropTypes.string.isRequired,
          userId: PropTypes.object.isRequired
        }).isRequired
    ).isRequired,
}

const mapStateToProps = state => ({
    tickets: state.ticket
})



export default connect(mapStateToProps, null)(TicketsListPage);
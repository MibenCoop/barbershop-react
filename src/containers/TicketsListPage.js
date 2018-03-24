import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import TicketItem from '../components/TicketItem'
import { deleteTicket } from '../actions/bookTickets.js'
import '../styles/TicketList.css'

class TicketsListPage extends Component{

    renderItems(tickets, compareFunc) {
        const ticketItems = tickets
            .filter((ticket) => compareFunc(ticket.date, ticket.time))
            .map(ticket => {
                    return (
                        <TicketItem 
                            key={String(ticket._id)} 
                            value={ticket} 
                            deleteItem = {this.props.deleteTicket}
                        />
                    );
                }
            );
        return ticketItems;
    }
    compareTicketsData(date, time) {
        let fullDate = date + " " + time;
        return ( +new Date(fullDate) > new Date() ) ? true : false
    }
    comparePastTicketsData(date, time) {
        let fullDate = date + " " + time;
        return ( +new Date(fullDate) > new Date() ) ? false : true
    }
    render() {
        const { tickets } = this.props;
        const ticketFutureItems = this.renderItems(tickets, this.compareTicketsData)
        const ticketPastItems = this.renderItems(tickets, this.comparePastTicketsData);

        return (
            <div>
                <span>Запланированные консультации</span>
                <ul>    
                    {ticketFutureItems}
                </ul>
                <span>Прошедшие консультации</span>
                <ul>    
                    {ticketPastItems}
                </ul>
            </div>
        );
    }
}
 
TicketsListPage.propTypes = {
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



export default connect(mapStateToProps, {deleteTicket})(TicketsListPage);
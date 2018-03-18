import React, {Component} from 'react'
import TicketForm from '../forms/TicketForm'
import { connect } from 'react-redux'
// import { login } from '../../actions/auth'
import { bookTicket } from '../../actions/bookTickets'
import PropTypes from 'prop-types'

class BookTicketPage extends Component {
    submit = data =>
        this.props.bookTicket(data).then(() => this.props.history.push('/dashboard'));

    render() {
        return (
            <div> 
                Blank the form
                <TicketForm submit={this.submit} />
            </div>
        );
    };
}
 
BookTicketPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    bookTicket: PropTypes.func.isRequired,
}

export default connect(null, {bookTicket})(BookTicketPage);
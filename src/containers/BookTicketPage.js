import React, {Component} from 'react'
import TicketForm from '../components/TicketForm'
import { connect } from 'react-redux'
import { bookTicket } from '../actions/bookTickets'
import PropTypes from 'prop-types'

class BookTicketPage extends Component {
    state = {
        data: {
            date: {},
            time: {}
        }, 
        errors: {}
    }

    onSubmit = (event) => {
        const { bookTicket } = this.props;
        event.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState({errors});
        if ( Object.keys(errors).length === 0  ) {
            bookTicket(this.state.data)
                .then(() => this.props.history.push("/dashboard"))
                .catch(err => this.setState({errors: err.response.data.errors}));
        }
    }

    onChange = (e) => {
        this.setState({
            data: { ...this.state.data, [e.target.name]: e.target.value}
        })
    }

    validate = (data) => {
        const errors = {};
        // if (validator.toDate(data.date) === null) console.log("data error");
        return errors;
    }

    render() {
        return (
            <div> 
                Blank the form
                <TicketForm 
                    submit={this.onSubmit}
                    change={this.onChange}
                    ticket={this.state.data}
                />
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
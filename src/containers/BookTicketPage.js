import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import TicketForm from '../components/forms/TicketForm'
import { bookTicket } from '../actions/bookTickets'
import { getMasters } from '../actions/getMasters.js';

class BookTicketPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                date: {},
                time: {},
                master: {}
            }, 
            errors: {}
        };
    }
    componentDidMount = () => {
        const { getMasters } = this.props;
        getMasters();
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
        if (Object.keys(data.date).length === 0) errors.date = "Некорректная дата";
        if (Object.keys(data.time).length === 0) errors.time = "Некорректное время";
        const fullDate = data.date + " " + data.time;
        if (+new Date(fullDate) < +new Date()) {
            errors.global = "Invalid date or time";
        }
        return errors;
    }

    render() {
        return (
            <div> 
                <TicketForm 
                    masters = {this.props.masters}
                    submit={this.onSubmit}
                    change={this.onChange}
                    ticket={this.state.data}
                    errors={this.state.errors}
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

const mapDispatchToProps = dispatch => ({
    bookTicket: (data) => dispatch(bookTicket(data)),
    getMasters: () => dispatch(getMasters())
})

const mapStateToProps = state => ({
    masters: state.master
})
export default connect(mapStateToProps, mapDispatchToProps)(BookTicketPage);
import React, { Component } from 'react'
import validator from 'validator'
import PropTypes from 'prop-types'

export default class TicketForm extends Component {
    state = {
        data: {
            date: {},
            time: {}
        }, 
        errors: {}
    }

    onSubmit = (event) => {
        event.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState({errors});
        console.log('submit workss');
        if ( Object.keys(errors).length === 0  ) {
            console.log('.data', this.state.data);
            this.props.submit(this.state.data)
                    .catch(err => this.setState({errors: err.response.data.errors}));
        }
    }

    onChange = (e) => {
        console.log('evemtTicketForm', e.target.value);
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
        const { data, errors } = this.state;
        return(
            <form onSubmit = {this.onSubmit}>
                <label htmlFor="date">
                    date:
                </label>
                <input 
                    type="date" 
                    name="date" 
                    value={data.date} 
                    onChange={this.onChange}
                /><br/>
                <label htmlFor="time">
                    time:
                </label>
                <input 
                    type="time"
                    name="time"
                    value={data.time}
                    onChange={this.onChange} 
                /><br/>
                <button>Submit</button>
            </form>
        );
    }
}

TicketForm.propTypes = {
    submit: PropTypes.func.isRequared
}

import React, { Component } from 'react'
import validator from 'validator'
import PropTypes from 'prop-types'

const TicketForm = (props) => {
    const { ticket, submit, change } = props;
    return(
        <form onSubmit = {submit}>
            <label htmlFor="date">
                date:
            </label>
            <input 
                type="date" 
                name="date" 
                value={ticket.date} 
                onChange={change}
            /><br/>
            <label htmlFor="time">
                time:
            </label>
            <input 
                type="time"
                name="time"
                value={ticket.time}
                onChange={change} 
            /><br/>
            <button>Submit</button>
        </form>
    );
}

TicketForm.propTypes = {
    submit: PropTypes.func.isRequired
}

export default TicketForm;

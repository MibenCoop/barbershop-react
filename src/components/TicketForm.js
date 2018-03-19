import React from 'react'
import PropTypes from 'prop-types'
import InlineError from './messages/InlineError.js'
import BlockError from './messages/BlockError.js'

const TicketForm = (props) => {
    const { ticket, submit, change, errors } = props;
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
            <BlockError error={errors.global} />
        </form>
    );
}

TicketForm.propTypes = {
    submit: PropTypes.func.isRequired
}

export default TicketForm;

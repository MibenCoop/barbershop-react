import React from 'react'
import PropTypes from 'prop-types'
import InlineError from '../messages/InlineError.js'
import BlockError from '../messages/BlockError.js'
import '../../styles/LoginForm.css'
const TicketForm = (props) => {
    const { ticket, submit, change, errors, masters } = props;
    const selectMaster = masters
        .map(master => {
                return (
                    <option value={master.fullName}>{master.fullName}</option>
                );
            }
        );
    //Validate for date time
    const date = new Date();
    const reqMonth = date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1); 
    const reqDay = date.getDate() < 9 ? "0" + date.getDate() : date.getDate(); 
    const reqDate = (date.getFullYear() + "-" + reqMonth + "-" + reqDay);

    return(
        <form className="form" onSubmit = {submit}>
            <label htmlFor="master">
                Выберите консультанта:
            </label>
            <select name="master" onChange={change} >
                {selectMaster}
            </select>
            <label htmlFor="date">
                Выберите дату:
            </label>
            <input
                required 
                min = {reqDate}
                type="date" 
                name="date" 
                value={ticket.date} 
                onChange={change}
            />
            <InlineError error={errors.date} /><br/>
            <label htmlFor="time">
                Выберите время:
            </label>
            <input
                required 
                min = "09:00"
                max = "20:00"
                type="time"
                name="time"
                value={ticket.time}
                onChange={change} 
            />
            <InlineError error={errors.time} /><br/>
            <button>Отправить</button>
            <BlockError error={errors.global} />
        </form>
    );
}

TicketForm.propTypes = {
    submit: PropTypes.func.isRequired
}

export default TicketForm;

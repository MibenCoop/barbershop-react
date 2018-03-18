import React, {Component} from 'react'
import PropTypes from 'prop-types'
 const TicketItem = ( props) => {
 	const { value, deleteTicket, deleteItem } = props;
 	return (
 		<li>
 			<span>{value.date} : {value.time}</span>
 			<button 
 				onClick={() => deleteItem(value._id)}
 			>
 				Delete
 			</button>
 		</li>
 	);
} 

TicketItem.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
}

export default TicketItem;
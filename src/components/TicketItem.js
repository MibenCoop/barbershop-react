import React from 'react'
import PropTypes from 'prop-types'
 const TicketItem = ( props) => {
 	const { value, deleteItem } = props;
 	return (
 		<li>
 			<span>{value.date} : {value.time}</span>
 			<button 
 				onClick={() => { 
					 deleteItem(value._id);
					 }
				}
 			>
 				Delete
 			</button>
 		</li>
 	);
} 

export default TicketItem;
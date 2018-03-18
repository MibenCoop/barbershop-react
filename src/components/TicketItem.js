import React, {Component} from 'react'

 const TicketItem = (props) => {
 	const { value } = props;
 	return (
 		<li>{value.date} : {value.time} </li>
 	);
} 

export default TicketItem;
import React from 'react'
const TicketItem = ( props) => {
 	const { value, deleteItem } = props;
 	return (
 		<li>
 			<p>Дата: {value.date}</p>
			<p>Время: {value.time}</p>
			{+new Date(value.date + " " + value.time) > new Date() ? (
 			<button onClick={() => deleteItem(value._id)}>
				Отменить
			</button>
			) : (<span></span>) }

 		</li>
 	);
} 

export default TicketItem;
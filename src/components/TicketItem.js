import React from 'react'
import '../styles/TicketList.css'

const TicketItem = ( props) => {
 	const { value, deleteItem } = props;
 	return (
 		<li className = "tickets__item">
 			<p>Дата: {value.date}</p>
			<p>Время: {value.time}</p>
			<p>Консультант: <br /> {value.master}</p>
			{+new Date(value.date + " " + value.time) > new Date() ? (
 			<button onClick={() => deleteItem(value._id)}>
				Отменить
			</button>
			) : (<button onClick={() => deleteItem(value._id)}>
				Удалить
			</button>) }

 		</li>
 	);
} 

export default TicketItem;
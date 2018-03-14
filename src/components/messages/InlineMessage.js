import PropTypes from 'prop-types';
import React from 'react';
const InlineMessage = ({error}) => {
	console.log('error', error)
	return(
		<div style={{ color: "red"}}>{ error } </div>
	);
}

InlineMessage.propTypes = {
	error: PropTypes.string.isRequired
}

export default InlineMessage;
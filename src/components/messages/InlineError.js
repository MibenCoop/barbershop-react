import PropTypes from 'prop-types';
import React from 'react';

//TODO Styles instead <br>
const InlineError = ({error}) => (
		<span style={{ color: "red"}}>{ error } </span>
);

InlineError.propTypes = {
	error: PropTypes.string.isRequired
}

export default InlineError;
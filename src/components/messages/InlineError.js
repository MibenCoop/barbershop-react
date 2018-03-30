import PropTypes from 'prop-types';
import React from 'react';

const InlineError = ({error}) => (
		<span style={{ color: "red", margin: "3%"}}>{ error } </span>
);

InlineError.propTypes = {
	error: PropTypes.string.isRequired
}

export default InlineError;
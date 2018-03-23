import PropTypes from 'prop-types';
import React from 'react';

const styles = {
	span: {
		padding: "3%"
	}
}
//TODO Styles instead <br>
const InlineError = ({error}) => (
		<span style={{ color: "red", margin: "3%"}}>{ error } </span>
);

InlineError.propTypes = {
	error: PropTypes.string.isRequired
}

export default InlineError;
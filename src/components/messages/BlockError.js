import PropTypes from 'prop-types';
import React from 'react';
const BlockError = ({error}) => (
		<div style={{ color: "red"}}>{ error } </div>
);

BlockError.propTypes = {
	error: PropTypes.string.isRequired
}

export default BlockError;
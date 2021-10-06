import React from 'react';
import PropTypes from 'prop-types';

/**
 * Function react component for congratutory message
 * @function
 * @param {object} props  - React props
 * @returns {JSX.Element} - Render component for null if 'success props false
 */

const Congrats = (props) => {
	if (props.success) {
		return (
			<div data-test='component-congrats' className='alert alert-success'>
				<span data-test='congrats-message'>
					Congratulation! You guessed the word!
				</span>
			</div>
		);
	} else {
		return <div data-test='component-congrats' />;
	}
};

Congrats.propTypes = {
	success: PropTypes.bool.isRequired,
};

export default Congrats;

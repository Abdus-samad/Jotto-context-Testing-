import React from 'react';
import PropTypes from 'prop-types';

const Input = ({success, secretWord}) => {
	const [currentGuess, setCurrentGuess] = React.useState('');

	if (success) {
		return <div data-test='component-input' />;
	}
	return (
		<div data-test='component-input'>
			<form className='form-inline'>
				<input
					data-test='input-box'
					className='mb-2 mx-sm-3'
					type='text'
					placeholder='enter guess'
					value={currentGuess}
					onChange={(event) => setCurrentGuess(event.target.value)}
				/>
				<button
					onClick={(e) => {
						e.preventDefault();
						setCurrentGuess('');
					}}
					data-test='submit-button'
					className='mb-2 btn btn-primary'>
					Submit
				</button>
			</form>
		</div>
	);
};

Input.propTypes = {
	secretWord: PropTypes.string.isRequired,
};
export default Input;

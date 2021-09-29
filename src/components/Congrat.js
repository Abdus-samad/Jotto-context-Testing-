/**
 * Function react component for congratutory message
 * @function
 * @param {object} props  - React props
 * @returns {JSX.Element} - Render component for null if 'success props false
 */

export default (props) => {
	if (props.success) {
		return (
			<div data-test='component-congrat'>
				<span data-test='congrats-message'>
					Congratulatio! You guessed the word!
				</span>
			</div>
		);
	} else {
		return <div data-test='component-congrat' />;
	}
};

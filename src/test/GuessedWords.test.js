import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAttr, checkProps} from './testUtlis';
import GuessedWords from '../components/GuessedWords';

const defaultProps = {
	guessedWords: [{guessedWords: 'train', letterMatchCount: 3}],
};

/**
 * Factory function to create a shallowWrapper for the GuessedWords component.
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
	const setupProps = {...defaultProps, ...props};
	return shallow(<GuessedWords {...setupProps} />);
};

test('does not throw warning with expected props', () => {
	checkProps(GuessedWords, defaultProps);
});

describe('if there no words guessed', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = setup({guessedWords: []});
	});
	test('render without error', () => {
		const component = findByTestAttr(wrapper, 'component-guessed-words');
		expect(component.length).toBe(1);
	});
	test('render instructions to guess a word', () => {
		const instructions = findByTestAttr(wrapper, 'guess-instructions');
		expect(instructions.text().length).not.toBe(0);
	});
});

describe('if there are word guessed', () => {});
import React from 'react';
import App from './App';
import { mount } from 'enzyme';
import { findByTestAttr } from './test/testUtlis';

// activate global mock to make sure getSecretWord doesn't make network call
jest.mock('./actions/Index');
import { getSecretWord as mockGetSecretWord } from './actions/Index';

/**
 * Setup function for App
 * @returns {ReactWrapper}
 */

const setup = () => {
	// use mount, because useEffect not called on `shallow`
	// https://github.com/airbnb/enzyme/issues/2086
	return mount(<App />);
};

describe.each([
	[null, true, false],
	['party', false, true],
])('renders with secretWors as %s', (secretWord, loadingShows, appShows) => {
	let wrapper;
	let originalUseReducer;
	beforeEach(() => {
		originalUseReducer = React.useReducer;
		const mockUseReducer = jest
			.fn()
			.mockReturnValue([{ secretWord }, jest.fn()]);
		React.useReducer = mockUseReducer;
		wrapper = setup();
	});
	afterEach(() => {
		React.useReducer = originalUseReducer;
	});
	test(`renders loading spinner: ${loadingShows}`, () => {
		const spinnerComponent = findByTestAttr(wrapper, 'spinner');
		expect(spinnerComponent.exists()).toBe(loadingShows);
	});
	test(`renders app: ${appShows}`, () => {
		const appComponent = findByTestAttr(wrapper, 'component-app');
		expect(appComponent.exists()).toBe(appShows);
	});
});

describe('get secret word', () => {
	beforeEach(() => {
		// clear the mock calls from previous test
		mockGetSecretWord.mockClear();
	});
	test('get secret word on app mount', () => {
		const wrapper = setup();
		expect(mockGetSecretWord).toHaveBeenCalledTimes(1);
	});
	test('getSecretWord does not run on app update', () => {
		const wrapper = setup();
		mockGetSecretWord.mockClear();
		// using setProps because wrapper.update() doesn't trigger useEffect
		// https://github.com/enzymejs/enzyme/issues/2254

		wrapper.setProps();
		expect(mockGetSecretWord).toHaveBeenCalledTimes(0);
	});
});

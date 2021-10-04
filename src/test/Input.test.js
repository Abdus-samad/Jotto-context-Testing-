import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAttr, checkProps} from './testUtlis';
import Input from '../components/Input';

/**
 * Setup function for app
 * @returns {shallowWrapper}
 */
const setup = () => {
	return shallow(<Input />);
};

test('Input renders without error', () => {
	const wrapper = setup();
	const inputComponent = findByTestAttr(wrapper, 'component-input');
	expect(inputComponent.length).toBe(1);
});

import App from './App';
import {shallow} from 'enzyme';

test('renders non-empty component without crashing', () => {
	const wrapper = shallow(<App />);
	expect(wrapper.exists()).toBe(true);
});
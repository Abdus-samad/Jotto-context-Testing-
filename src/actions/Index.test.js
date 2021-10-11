import moxios from 'moxios';
import { getSecretWord } from './Index';

describe('getSecretWord', () => {
	beforeEach(() => {
		moxios.install();
	});
	afterEach(() => {
		moxios.uninstall();
	});
	test('secretWord is return', async () => {
		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 200,
				response: 'party',
			});
		});

		const mockSetSecretWord = jest.fn();
		// Update to test app in redux / context sections
		await getSecretWord(mockSetSecretWord);
		expect(mockSetSecretWord).toHaveBeenCalledWith('party')
	});
});

import React from 'react'
import './App.css';
import GuessedWords from './components/GuessedWords';
import Congrats from './components/Congrats';
import Input from './components/Input';
import { useEffect } from 'react';
import { getSecretWord } from './actions/Index';

/**
 * @function reducer to update state automatically called by dispatch
 * @param {*} state - previous state
 * @param {*} action - 'type' and 'payload' properties
 * @returns {object} - new State
 */

const reducer = (state, action) => {
	switch (action.type) {
		case 'setSecretWord':
			return { ...state, secret: action.payload };
		default:
			throw new Error(`Invalid action type: ${action.type}`);
	}
};

function App() {
	// const [secretWord, setSecretWord]  = useState('')

	const [state, dispatch] = React.useReducer(reducer, { secretWord: '' });
	// TODO: get props from shared state
	const success = false;
	const guessedWords = [];

	const setSecretWord = (secretWord) => {
		dispatch({
			type: 'setSecretWord',
			payload: secretWord,
		});
	};

	useEffect(() => {
		getSecretWord(setSecretWord);
	}, []);
	return (
		<div className='container' data-test='component-app'>
			<h1>Jotto</h1>
			<Congrats success={success} />
			<Input success={success} secretWord={state.secretWord} />
			<GuessedWords guessedWords={guessedWords} />
		</div>
	);
}

export default App;

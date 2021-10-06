import './App.css';
import GuessedWords from './components/GuessedWords';
import Congrats from './components/Congrats';
import Input from './components/Input';

function App() {
	const success = false;
	const secretWord = 'party';
	const guessedWords = [];

	return (
		<div className='container' data-test='component-app'>
			<h1>Jotto</h1>
			<Congrats success={success} />
			<Input success={success} sercetWord={secretWord} />
			<GuessedWords guessedWords={guessedWords} />
		</div>
	);
}

export default App;

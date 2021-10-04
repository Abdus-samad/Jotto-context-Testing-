import './App.css';
import GuessedWords from './components/GuessedWords';
import Congrat from './components/Congrat';
function App() {
	return (
		<div className='container'>
			<h1>Jotto</h1>
			<Congrat success={true} />
			<GuessedWords
				guessedWords={[{guessedWord: 'train', letterMatchCount: 3}]}
			/>
		</div>
	);
}

export default App;

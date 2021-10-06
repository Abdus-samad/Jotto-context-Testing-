/**
 * @method getLetterMatchCount
 * @param {string} guessedWord - Guessed Word
 * @param {string} secretWord - secret Word
 * @return {number} - Number of letter matched between guessed word and secret word
 */

export function getLetterMatchCount(guessedWord, secretWord) {
	const secretLetters = secretWord.split('');
	const guessedLetterSet = new Set(guessedWord);
	return secretLetters.filter((letter) => guessedLetterSet.has(letter))
		.length;
}

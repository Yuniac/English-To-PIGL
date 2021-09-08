import react from "react";
import "./App.css";
import CopyButton from "./CopyButton";
import Footer from "./Footer";
import UsageNotes from "./UsageNotes";

function App() {
	const [userInput, setUserInput] = react.useState("");
	const [result, setResult] = react.useState([]);
	const [copyingState, setCopyingState] = react.useState(false);

	function convert() {
		if (userInput === "" || !userInput) {
			setUserInput(null);
			return;
		}
		const vowels = ["a", "e", "i", "o", "u"];
		const anArrayOfThestringSToBeConverted = userInput.split(" ");
		let anArrayOfconvertedWordsAsTheResult = [];
		for (let i = 0; i < anArrayOfThestringSToBeConverted.length; i++) {
			let currentWord = anArrayOfThestringSToBeConverted[i];
			let endOfWordGrammar;
			if (/[,.]/g.test(currentWord[currentWord.length - 1])) {
				endOfWordGrammar = currentWord[currentWord.length - 1];
				currentWord = currentWord.slice(0, -1);
			}
			let hasWordBeenConverted = false;
			for (let j = 0; j < currentWord.length; j++) {
				let currentLetter = currentWord[j];
				// if a vowel exist, stop at it;
				if (vowels.indexOf(currentLetter) !== -1) {
					let currentVowelLetterIndex = currentWord.indexOf(currentLetter);
					// slice the word up to but not including the vowel
					let part1 = currentWord.slice(currentVowelLetterIndex);
					let part2 = currentWord.slice(0, currentVowelLetterIndex);
					let currentWordConverted = part1 + part2 + "ay";
					if (endOfWordGrammar) currentWordConverted += endOfWordGrammar;
					anArrayOfconvertedWordsAsTheResult.push(currentWordConverted);
					hasWordBeenConverted = true;
					// finished reversing the current word, break and go on to the next word;
					break;
				}
			}
			// if the word has no vowels it means it wasn't converted nor pushed into the results array, then push it. we will only reach here if none of the currentWord letters (currentLetter) was a vowel;
			if (!hasWordBeenConverted) {
				anArrayOfconvertedWordsAsTheResult.push(currentWord);
			}
		}
		anArrayOfconvertedWordsAsTheResult = anArrayOfconvertedWordsAsTheResult.join(" ");
		setResult(anArrayOfconvertedWordsAsTheResult);
		// setCopyingState((oldState) => (oldState = !oldState));
		setCopyingState(false);
	}
	function updateUserInput(e) {
		if (e.target.value === null || e.target.value === "") {
			setUserInput("");
			setCopyingState(false);
			return;
		}
		setUserInput(e.target.value);
	}
	return (
		<>
			<div className="App">
				<h1>English To PIGL convertor</h1>
				<div className="app-wrapper">
					<div className="app-head">
						<h2>English</h2>
						<h2>PIGL</h2>
					</div>
					<div className="app-body">
						<div className="user-input">
							<textarea
								onChange={updateUserInput}
								className={userInput !== null ? null : "warn-user-empty-input"}
								placeholder="Paste Or Write English here... Then Click On The Arrow To Convert It To PIGL"
								autoComplete="off"
								autoCapitalize="off"
								autoCorrect="off"
								spellCheck="false"
							></textarea>
							<p className="warn-user-paragraph" style={{ visibility: userInput !== null ? "hidden" : "visible" }}>
								You must enter some text before processeding...
							</p>
						</div>
						<div className="arrow-icon" onClick={convert}>
							<svg xmlns="http://www.w3.org/2000/svg" height="64px" viewBox="0 0 24 24" width="64px" fill="#4be2ff">
								<path d="M0 0h24v24H0V0z" fill="none" />
								<path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z" />
							</svg>
						</div>
						<div className="user-result">
							<textarea value={result} readOnly></textarea>
							<CopyButton text={result} />
						</div>
					</div>
				</div>
				<UsageNotes />
			</div>
			<Footer />
		</>
	);
}

export default App;

import { useEffect, useState } from "react";
import { FlashCard } from "./FlashCard/FlashCard";
import getRandomWord from "../../functions/getRandomWord";
import "./index.css";
import { useNavigate } from "react-router-dom";

export default function StudyingPage(props) {
  // Props
  const { allWords, thisWord, updateWordRating } = props;
  // const nextRandom = getRandomWord(available);

  // States & Hooks
  const [wordOnPage, setWordOnPage] = useState(thisWord);
  const [availableWords, setAvailableWords] = useState(allWords);
  const [nextWord, setNextWord] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    let available = availableWords.filter((word) => word.id !== wordOnPage.id);
    if (availableWords.length === 1) {
      available = [...availableWords];
    }
    const thisNext = getRandomWord(available);
    setNextWord(thisNext);
  }, [availableWords]);

  // Button functions
  function updateAvailableWords(rated) {
    if (rated.rating === "easy") {
      const updated = availableWords.filter((word) => word.id !== rated.id);
      setAvailableWords(updated);
    } else {
      const updated = availableWords.map((word) =>
        word.id === rated.id ? rated : word
      );
      setAvailableWords(updated);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    wordOnPage.rating = event.target.value;

    updateWordRating(wordOnPage);
    updateAvailableWords(wordOnPage);

    setWordOnPage(nextWord);
  }

  function returnToHome() {
    navigate("/");
  }

  function reset() {
    setWordOnPage(thisWord);
    setAvailableWords(allWords);
  }

  function restart() {
    reset();
  }

  // console.log("allWords", allWords);
  // console.log("thisWord", thisWord);
  // console.log("availableWords", availableWords);
  // console.log("wordOnPage: ", wordOnPage);
  // console.log("nextWord: ", nextWord);

  return (
    <section className="studying-section">
      {nextWord ? (
        <div className="wrap">
          <h3>
            Click to see the <span>answer</span>
          </h3>

          <FlashCard word={wordOnPage} />

          <p>Did you get the answer?</p>

          <div className="rate-button-container">
            <button
              type="submit"
              value="easy"
              className="rate-button yes"
              onClick={handleSubmit}
            >
              YES
            </button>
            <button
              type="submit"
              value="not-sure"
              className="rate-button not-sure"
              onClick={handleSubmit}
            >
              Not sure
            </button>
            <button
              type="submit"
              value="hard"
              className="rate-button hard"
              onClick={handleSubmit}
            >
              NO
            </button>
          </div>

          <button
            className="basic return-home-btn transparent"
            onClick={returnToHome}
          >
            Return to Home
          </button>
        </div>
      ) : (
        <div className="finished-wrap">
          <div className="finished-text-wrap">
            <h2>Congratulations!</h2>
            <p>You finished all the words!</p>
          </div>
          <div className="finished-button-wrap">
            <button className="basic return-home-btn" onClick={returnToHome}>
              Return to Home
            </button>
            <button className="basic" onClick={restart}>
              Another round
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

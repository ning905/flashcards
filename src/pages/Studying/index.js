import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FlashCard } from "./Components/FlashCard";
import { filterOutById, getRandomWord, updateById } from "../../functions";
import { Paths, UIText } from "../../utils";

export default function StudyingPage(props) {
  // Props
  const { allWords, thisWord, updateWordRating } = props;

  // States & Hooks
  const [wordOnPage, setWordOnPage] = useState(thisWord);
  const [availableWords, setAvailableWords] = useState(allWords);
  const [nextWord, setNextWord] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    let available = filterOutById(wordOnPage, availableWords);
    if (availableWords.length === 1) {
      available = [...availableWords];
    }
    const thisNext = getRandomWord(available);
    setNextWord(thisNext);
  }, [availableWords]);

  // Button functions
  function updateAvailableWords(rated) {
    let updated;
    if (rated.rating === "easy") {
      updated = filterOutById(rated, availableWords);
    } else {
      updated = updateById(rated, availableWords);
    }
    setAvailableWords(updated);
  }

  function handleSubmit(event) {
    event.preventDefault();

    wordOnPage.rating = event.target.value;

    updateWordRating(wordOnPage);
    updateAvailableWords(wordOnPage);

    setWordOnPage(nextWord);
  }

  function returnToHome() {
    navigate(Paths.home);
  }

  function restart() {
    setWordOnPage(thisWord);
    setAvailableWords(allWords);
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
            {UIText.cardClickSeeAnswer}{" "}
            <span>{UIText.cardClickSeeAnswerHighlight}</span>
          </h3>

          <FlashCard word={wordOnPage} />

          <p>{UIText.cardConfirmGetAnswer}</p>

          <div className="rate-button-container">
            <button
              type="submit"
              value="easy"
              className="rate-button yes"
              onClick={handleSubmit}
            >
              {UIText.rateButtonYes}
            </button>
            <button
              type="submit"
              value="not-sure"
              className="rate-button not-sure"
              onClick={handleSubmit}
            >
              {UIText.rateButtonNotSure}
            </button>
            <button
              type="submit"
              value="hard"
              className="rate-button hard"
              onClick={handleSubmit}
            >
              {UIText.rateButtonNo}
            </button>
          </div>

          <button
            className="basic return-home-btn transparent"
            onClick={returnToHome}
          >
            {UIText.returnToHome}
          </button>
        </div>
      ) : (
        <div className="finished-wrap">
          <div className="finished-text-wrap">
            <h2>{UIText.congrats}</h2>
            <p>{UIText.studyFinish}</p>
          </div>
          <div className="finished-button-wrap">
            <button className="basic return-home-btn" onClick={returnToHome}>
              {UIText.returnToHome}
            </button>
            <button className="basic" onClick={restart}>
              {UIText.anotherRound}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

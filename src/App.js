import { Route, Routes } from "react-router-dom";
import "./App.css";
import StudyingPage from "./pages/Studying";
import HomePage from "./pages/Home";
import { vocabulary } from "./vocabulary";
import { useEffect, useState } from "react";
import getRandomWord from "./functions/getRandomWord";

function App() {
  const [allWords, setAllWords] = useState(vocabulary);
  const [randomWord, setRandomWord] = useState({});

  useEffect(() => {
    if (allWords) {
      setRandomWord(getRandomWord(allWords));
    }
  }, []);

  function updateWordRating(wordWithRate) {
    const updated = allWords.map((word) =>
      word.id === wordWithRate.id ? wordWithRate : word
    );
    setAllWords(updated);
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage allWords={allWords} />} />
        <Route
          path="/Studying"
          element={
            <StudyingPage
              allWords={allWords}
              thisWord={randomWord}
              updateWordRating={updateWordRating}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;

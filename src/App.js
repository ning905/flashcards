import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import StudyingPage from "./pages/studying";
import FlashCardPage from "./pages/studying-flip-card";
import { vocabulary } from "./utils/vocabulary";
import { useEffect, useState } from "react";
import { getRandomWord, updateById } from "./functions";
import { Paths } from "./utils";

function App() {
  const [allWords, setAllWords] = useState(vocabulary);
  const [randomWord, setRandomWord] = useState({});

  useEffect(() => {
    if (allWords) {
      setRandomWord(getRandomWord(allWords));
    }
  }, []);

  function updateWordRating(wordWithRate) {
    const updated = updateById(wordWithRate, allWords);
    setAllWords(updated);
  }

  return (
    <>
      <Routes>
        <Route path={Paths.home} element={<HomePage allWords={allWords} />} />
        <Route
          path={Paths.studyFlipCard}
          element={
            <FlashCardPage
              allWords={allWords}
              thisWord={randomWord}
              updateWordRating={updateWordRating}
            />
          }
        />
        <Route path={Paths.study} element={<StudyingPage />} />
      </Routes>
    </>
  );
}

export default App;

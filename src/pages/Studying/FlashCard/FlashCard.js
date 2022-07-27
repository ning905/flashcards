import { useEffect, useState } from "react";
import "pages/Studying/FlashCard/FlashCard.css";

export function FlashCard(props) {
  const { word } = props;
  const [flipped, setFlipped] = useState();

  useEffect(() => {
    setFlipped(false);
  }, [word]);

  function handleClick() {
    setFlipped(!flipped);
  }

  console.log("flipped card: ", flipped);

  return (
    <div className="flashcard-container">
      <div
        className={`flashcard ${flipped ? "flip" : null}`}
        onClick={handleClick}
      >
        <div className="front face">
          <div className="ZH-word">{word.ZH}</div>
          <div className="pinyin">{word.pin}</div>
        </div>
        <div className="back face">
          <div className="EN-word">{flipped ? word.EN : null}</div>
        </div>
      </div>
    </div>
  );
}

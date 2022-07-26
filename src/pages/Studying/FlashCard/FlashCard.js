import { useState } from "react";
import "./FlashCard.css";

export function FlashCard(props) {
  const { word } = props;
  const [flipped, setFlipped] = useState(false);

  function handleClick() {
    setFlipped(!flipped);
  }

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
          <div className="EN-word">{word.EN}</div>
        </div>
      </div>
    </div>
  );
}

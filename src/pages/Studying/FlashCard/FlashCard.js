import "./FlashCard.css";

export function FlashCard(props) {
  return (
    <div class="flashcard">
      <div class="front-face">
        <div class="ZH-word">見る</div>
      </div>
      <div class="back-face">
        <div class="pinyin">みる</div>
        <div class="EN-word">to see</div>
        <div class="sentence">
          赤い猫を<span>見る</span>
        </div>
      </div>
    </div>
  );
}

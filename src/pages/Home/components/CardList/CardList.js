import "./CardList.css";
import CardListItem from "./CardListItem";

export default function CardList(props) {
  const { allWords } = props;

  return (
    <section>
      <div className="all-cards-area">
        {allWords.map((word) => (
          <CardListItem key={word.id} word={word} />
        ))}
      </div>
    </section>
  );
}

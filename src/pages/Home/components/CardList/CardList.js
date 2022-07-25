import "./CardList.css";
import CardListItem from "./CardListItem";
import { useEffect, useState } from "react";

export default function CardList(props) {
  const { vocabulary } = props;
  const [words, setWords] = useState([]);

  useEffect(() => {
    setWords(vocabulary);
  }, [vocabulary]);

  return (
    <section>
      <div className="all-cards-area">
        {words.map((word) => (
          <CardListItem word={word} />
        ))}
      </div>
    </section>
  );
}

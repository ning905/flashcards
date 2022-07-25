import "./CardList.css";
import CardListItem from "./CardListItem";

export default function CardList(props) {
  return (
    <section>
      <div className="all-cards-area">
        <CardListItem />
      </div>
    </section>
  );
}

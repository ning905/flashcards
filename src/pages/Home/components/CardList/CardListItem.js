import "./CardListItem.css";

export default function CardListItem(props) {
  const { word } = props;

  return (
    <div className="card">
      <h2>{word.ZH}</h2>
      <p>{word.pin}</p>
      <p>{word.EN}</p>
    </div>
  );
}

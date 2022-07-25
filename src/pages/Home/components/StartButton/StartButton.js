import { Link } from "react-router-dom";
import "./StartButton.css";

export default function StartButton(props) {
  const { vocabulary } = props;

  return (
    <div className="start-button-container">
      <button className="start-button">
        <Link to="/Studying" state={{ vocabulary }}>
          Start study
        </Link>
      </button>
    </div>
  );
}

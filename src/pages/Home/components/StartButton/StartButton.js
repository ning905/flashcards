import { Link, useNavigate } from "react-router-dom";
import "./StartButton.css";

export default function StartButton() {
  const navigate = useNavigate();

  function handleClick(e) {
    navigate("/studying");
  }

  return (
    <div className="start-button-container">
      <button className="start-button basic" onClick={handleClick}>
        Start study
      </button>
    </div>
  );
}

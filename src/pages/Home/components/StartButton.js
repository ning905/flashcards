import { useNavigate } from "react-router-dom";
import { Paths, UIText } from "../../../utils";

export default function StartButton() {
  const navigate = useNavigate();

  function handleClick() {
    navigate(Paths.study);
  }

  return (
    <div className="start-button-container">
      <button className="start-button basic" onClick={handleClick}>
        {UIText.startButton}
      </button>
    </div>
  );
}

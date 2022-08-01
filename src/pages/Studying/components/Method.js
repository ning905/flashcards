import { useNavigate } from "react-router-dom";
import flashcardImg from "../../../images/flashcard-preview.png";

export default function Method(props) {
  const { title, img } = props;

  const navigate = useNavigate();
  function handleClick(e) {
    navigate("/");
  }

  return (
    <li className="study-method" onClick={handleClick}>
      <div className="img-container">
        <img src={flashcardImg} alt={title} />
      </div>
      <h2>{title}</h2>
    </li>
  );
}

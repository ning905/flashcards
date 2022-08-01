import { UIText } from "../../../utils";

export default function Header() {
  return (
    <header>
      <div className="title">
        <h1>{UIText.homeTitle}</h1>
        <p>{UIText.homeSubTitle}</p>
      </div>
    </header>
  );
}

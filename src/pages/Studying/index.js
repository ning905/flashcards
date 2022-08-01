import { UIText } from "../../utils";
import MethodsList from "./components/MethodsList";

export default function StudyingPage() {
  return (
    <section className="study-methods-section">
      <h2>{UIText.chooseMethod}</h2>
      <MethodsList />
    </section>
  );
}

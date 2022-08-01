import Method from "./Method";
import { methods } from "../../../utils";

export default function MethodsList() {
  return (
    <ul className="study-methods-list">
      {methods.map((method, index) => (
        <Method key={index} title={method.name} img={method.previewImg} />
      ))}
    </ul>
  );
}

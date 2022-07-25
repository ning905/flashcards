import { FlashCard } from "./FlashCard/FlashCard";

export default function StudyingPage(props) {
  const { vocabulary } = props;
  return (
    <div>
      <FlashCard />
    </div>
  );
}

import CardList from "./components/CardList";
import Header from "./components/Header";
import StartButton from "./components/StartButton";

export default function HomePage(props) {
  const { allWords } = props;

  return (
    <>
      <Header />
      <StartButton />
      <CardList allWords={allWords} />
    </>
  );
}

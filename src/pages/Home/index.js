import CardList from "pages/Home/components/CardList/CardList";
import Header from "pages/Home//components/Header/Header";
import StartButton from "pages/Home//components/StartButton/StartButton";

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

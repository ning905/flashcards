import CardList from "./components/CardList/CardList";
import Header from "./components/Header/Header";
import StartButton from "./components/StartButton/StartButton";

export default function HomePage(props) {
  const { vocabulary } = props;
  return (
    <>
      <Header />
      <StartButton vocabulary={vocabulary} />
      <CardList vocabulary={vocabulary} />
    </>
  );
}

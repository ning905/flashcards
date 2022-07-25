import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import { vocabulary } from "./vocabulary";

function App() {
  console.log(vocabulary.length);
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;

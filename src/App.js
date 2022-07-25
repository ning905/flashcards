import { Route, Routes } from "react-router-dom";
import "./App.css";
import StudyingPage from "./pages/Studying";
import HomePage from "./pages/Home";
import { vocabulary } from "./vocabulary";

function App() {
  return (
    <>
      <StudyingPage vocabulary={vocabulary} />
      <Routes>
        <Route path="/" element={<HomePage vocabulary={vocabulary} />} />
        <Route path="/Studying" element={<StudyingPage />} />
      </Routes>
    </>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Intro from "./pages/Intro";
import Meltdown from "./pages/Meltdown";
import Spectre from "./pages/Spectre";
import Implication from "./pages/Implication";
import Mitigation from "./pages/Mitigation";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/meltdown" element={<Meltdown />} />
        <Route path="/spectre" element={<Spectre />} />
        <Route path="/implication" element={<Implication />} />
        <Route path="/mitigation" element={<Mitigation />} />
      </Routes>
    </Router>
  );
}

export default App;

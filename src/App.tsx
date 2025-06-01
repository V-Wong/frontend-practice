import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./pages/Home";
import Progress from "./pages/Progress";
import TicTacToe from "./pages/TicTacToe";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/progress-bar" element={<Progress />} />
        <Route path="/tic-tac-toe" element={<TicTacToe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./pages/Home";
import Progress from "./pages/Progress";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/progress-bar" element={<Progress />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

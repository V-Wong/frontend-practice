import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./pages/Home";
import ImageLoader from "./pages/ImageLoader";
import Progress from "./pages/Progress";
import TicTacToe from "./pages/TicTacToe";
import type { JSX } from "react";

type PageToElement = {
  path: string;
  element: JSX.Element;
};

const PAGES: PageToElement[] = [
  { path: "/progress-bar", element: <Progress /> },
  { path: "/tic-tac-toe", element: <TicTacToe /> },
  { path: "/image-loader", element: <ImageLoader /> },
];

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        {PAGES.map(({ path, element }) => (
          <Route path={path} element={element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

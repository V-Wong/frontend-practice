import { BrowserRouter, Routes, Route, Link } from "react-router";

import ImageLoader from "./pages/ImageLoader";
import Progress from "./pages/Progress";
import TicTacToe from "./pages/TicTacToe";
import type { JSX } from "react";
import Page from "./Page";

type PageToElement = {
  name: string;
  path: string;
  element: JSX.Element;
};

const PAGES: PageToElement[] = [
  { name: "Progress Bar", path: "/progress-bar", element: <Progress /> },
  { name: "Tic Tac Toe", path: "/tic-tac-toe", element: <TicTacToe /> },
  { name: "Image Loader", path: "/image-loader", element: <ImageLoader /> },
];

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route
          path="/"
          element={
            <Page>
              <ul className="w-full max-w-md flex flex-col items-center gap-y-3">
                {PAGES.map(({ name, path }) => (
                  <Link
                    to={{ pathname: path }}
                    className="w-full text-center border-green-500 border-2"
                  >
                    <li>{name}</li>
                  </Link>
                ))}
              </ul>
            </Page>
          }
        />
        {PAGES.map(({ path, element }) => (
          <Route path={path} element={element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

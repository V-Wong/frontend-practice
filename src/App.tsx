import { BrowserRouter, Routes, Route, Link } from "react-router";

import ImageLoader from "./pages/ImageLoader";
import Progress from "./pages/Progress";
import TicTacToe from "./pages/TicTacToe";
import type { JSX } from "react";
import Page from "./Page";

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
        <Route
          path="/"
          element={
            <Page>
              <ul className="w-full flex flex-col items-center gap-y-3">
                {PAGES.map(({ path }) => (
                  <Link
                    to={{ pathname: path }}
                    className="w-full border-green-500 border-2"
                  >
                    <li>{path}</li>
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

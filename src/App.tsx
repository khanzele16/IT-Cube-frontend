import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import { JSX } from "react";
import Home from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";

interface IRouterElement {
  element: JSX.Element;
  path: string;
}

const IRoutersCatalog: IRouterElement[] = [
  {
    element: <Home />,
    path: "/",
  },
  {
    element: <Courses />,
    path: "/courses",
  },
];

function App() {
  return (
    <div className="w-full flex flex-col">
      <Header />
      <div className="w-full">
        <Routes>
          {
            IRoutersCatalog.map(({ element, path }) => (
              <Route key={path} path={path} element={element} />
            ))
          }
        </Routes>
      </div>
    </div>
  );
}

export default App;

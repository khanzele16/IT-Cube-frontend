import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import React, { JSX } from "react";
import Home from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";
import CourseVideos from "./pages/CourseVideos/CourseVideos";
import Profile from "./pages/Profile/Profile";
import News from "./pages/News/News";
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
    element: <News />,
    path: "/news",
  },
  {
    element: <Courses />,
    path: "/courses",
  },
  {
    element: <CourseVideos />,
    path: "/courses/:id",
  },
  {
    element: <Profile />,
    path: "/profile",
  },
];

function App() {
  return (
    <div className="w-full flex flex-col">
      <Header />
      <div className="w-full">
        <Routes>
          {IRoutersCatalog.map(({ element, path }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default App;

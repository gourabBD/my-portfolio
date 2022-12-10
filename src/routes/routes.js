import { createBrowserRouter } from "react-router-dom";

import Main from "../Layout/Main";
import Hero from "./../components/Hero/Hero";
import Projects from "./../components/Projects/Projects";
import ContactMe from "./../components/ContactMe/ContactMe";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Hero></Hero>,
      },
    ],
  },
]);

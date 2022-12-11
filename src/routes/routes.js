import { createBrowserRouter } from "react-router-dom";

import Main from "../Layout/Main";
import Hero from "./../components/Hero/Hero";
import Projects from "./../components/Projects/Projects";
import ContactMe from "./../components/ContactMe/ContactMe";
import ProjectDetails from "../components/projectDetails/ProjectDetails";
import Blogs from "./../components/blogs/Blogs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Hero></Hero>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },

      {
        path: "/details/:id",
        element: <ProjectDetails></ProjectDetails>,
        loader: ({ params }) =>
          fetch(
            `https://portfolio-server-umber.vercel.app/projects/${params?.id}`
          ),
      },
    ],
  },
]);

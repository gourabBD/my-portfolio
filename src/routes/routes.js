import { createBrowserRouter } from "react-router-dom";

import Main from "../Layout/Main";
import Hero from "./../components/Hero/Hero";
import ProjectDetails from "../components/projectDetails/ProjectDetails";
import Blogs from "./../components/blogs/Blogs";
import projectsData from "../components/Projects/projectData";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/projects/:id",
        element: <ProjectDetails />,
        loader: ({ params }) => {
          const project = projectsData.find((item) => item._id === params?.id);
          if (!project) throw new Response("Not Found", { status: 404 });
          return project;
        },
      },
    ],
  },
]);

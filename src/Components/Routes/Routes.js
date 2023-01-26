import { createBrowserRouter } from "react-router-dom";
import About from "../About/About";
import Blogs from "../Blogs/Blogs";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Main from "../Main/Main";
import ProjectDetails from "../Projects/ProjectDetails";
import Projects from "../Projects/Projects";
import SingleProjects from "../Projects/SingleProjects";
import Skills from "../Skills/Skills";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/projects",
        element: <Projects></Projects>,
      },
      {
        path: "/projects",
        element: <SingleProjects></SingleProjects>,
      },
      {
        path: "/projects/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/projects/${params.id}`),
        element: <ProjectDetails></ProjectDetails>,
      },
      {
        path: "/skills",
        element: <Skills></Skills>,
      },
      {
        path: "/about",
        element: <About></About>,
      },

      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },

  {
    path: "/blog",
    element: <Blogs></Blogs>,
  },
]);
export default router;

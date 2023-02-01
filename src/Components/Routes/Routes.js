import { createBrowserRouter } from "react-router-dom";
import About from "../About/About";
import Blogs from "../Blogs/Blogs";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Main from "../Main/Main";
import HeroQuiz from "../Projects/HeroQuiz";
import MuktasKitchen from "../Projects/MuktasKitchen";
import Projects from "../Projects/Projects";
import SingleProjects from "../Projects/SingleProjects";
import WhichBook from "../Projects/WhichBook";
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
        path: "/blog",
        element: <Blogs></Blogs>,
      },
      {
        path: "/projects/whichbook",
        element: <WhichBook></WhichBook>,
      },
      {
        path: "/projects/muktaskitchen",
        element: <MuktasKitchen></MuktasKitchen>,
      },
      {
        path: "/projects/heroquiz",
        element: <HeroQuiz></HeroQuiz>,
      },
      {
        path: "/projects",
        element: <SingleProjects></SingleProjects>,
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
]);
export default router;

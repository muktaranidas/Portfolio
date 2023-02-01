import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <div className="text-white">
      <Banner></Banner>
      <Projects></Projects>
      <Skills></Skills>
      <About></About>
      <Contact></Contact>
    </div>
  );
};

export default Home;

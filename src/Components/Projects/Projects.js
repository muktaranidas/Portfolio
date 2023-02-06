import React, { useEffect, useState } from "react";
import SingleProjects from "./SingleProjects";
import whichBook from "../../assets/WhichBook.jpg";
import muktasKitchen from "../../assets/img1.jpg";
import heroQuiz from "../../assets/HeroQuiz.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Which Book",
      description:
        "Different login system Admin, Buyer, Seller and individual dashboard. This project includes a React.js frontend and a back-end server in Node. A MongoDB database is used to store the data and uses Firebase for authentication and also JWT security system. Client side host in firebase and server side host",
      live: "https://which-book.web.app/",
      image: whichBook,
      link: "/projects/whichbook",
    },
    {
      id: 2,
      title: "Mukta's Kitchen",
      description:
        "This project is about give review on food. This project includes a React.js frontend and a back-end server in Node. A MongoDB database is used to store the data and uses Firebase for authentication and also JWT security system.",
      live: "https://my-kitchen-8b2f9.web.app/",
      image: muktasKitchen,
      link: "/projects/muktaskitchen",
    },
    {
      id: 3,
      title: "Hero Quiz",
      description:
        "This project is about develop quiz website with React Router.	Hero Quiz is my frontend website",
      live: "https://relaxed-capybara-5ec20c.netlify.app/",
      image: heroQuiz,
      link: "/projects/heroquiz",
    },
  ];

  return (
    <div className="grid grid-cols-1 " id="projects">
      <div>
        <h2 className="text-center mb-32 text-6xl text-white font-bold animate-bounce ">
          My Project
        </h2>
      </div>
      <div className="grid sm:grid-cols-1 mx-auto sm:gap-4 lg:grid-cols-3 gap-4 lg:mx-24 mb-12 ">
        {projects.map((project) => (
          <SingleProjects key={project.id} project={project}></SingleProjects>
        ))}
      </div>
    </div>
  );
};

export default Projects;

import React from "react";
import { Link } from "react-router-dom";
import "./SingleProject.css";
import whichBook from "../../assets/projects/homeWhichBook.png";
// import muktasKitchen from "../../assets/projects/mukta'sKitchen.png";
// import heroQuiz from "../../assets/projects/heroQuiz.png";

const SingleProjects = ({ project }) => {
  const projects = [
    {
      id: 1,
      title: "Which Book",
      description:
        "Different login system Admin, Buyer, Seller and individual dashboard. This project includes a React.js frontend and a back-end server in Node. A MongoDB database is used to store the data and uses Firebase for authentication and also JWT security system. Client side host in firebase and server side host",
      live: "https://which-book.web.app/",
      image:
        "https://img.freepik.com/premium-photo/opened-book-bible-background_112554-164.jpg?w=360",
    },
    {
      id: 2,
      title: "Mukta's Kitchen",
      description:
        "This project is about give review on food. This project includes a React.js frontend and a back-end server in Node. A MongoDB database is used to store the data and uses Firebase for authentication and also JWT security system.",
      live: "https://my-kitchen-8b2f9.web.app/",
      // image: muktasKitchen,
    },
    {
      id: 3,
      title: "Hero Quiz",
      description:
        "This project is about develop quiz website with React Router.	Hero Quiz is my frontend website",
      live: "https://relaxed-capybara-5ec20c.netlify.app/",
      // image: heroQuiz,
    },
  ];
  const { title, description, image, id, link } = project;
  return (
    <div className="card w-96 bg-slate-600 transition text-white  ease-in-out w-[300px] delay-150 hover:-translate-y-1 hover:scale-110 duration-300 shadow-xl">
      <figure className="projectSingleImage">
        <img src={image} alt="" className="img" />
      </figure>
      <div className="card-body projectSingleBody">
        <h2 className="card-title">{title}</h2>
        <p>
          {description.length > 100
            ? description.slice(150) + "..."
            : description}
        </p>
        <div className="card-actions justify-end">
          <Link to={link}>
            <button className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-5">
              Explore More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProjects;

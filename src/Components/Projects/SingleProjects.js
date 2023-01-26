import React from "react";
import { Link } from "react-router-dom";
import "./SingleProject.css";

const SingleProjects = ({ project }) => {
  const { title, description, image, _id } = project;
  return (
    <div className="card w-96 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 shadow-xl">
      <figure className="projectSingleImage">
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body projectSingleBody">
        <h2 className="card-title">{title}</h2>
        <p>
          {description.length > 100
            ? description.slice(100) + "..."
            : description}
        </p>
        <div className="card-actions justify-end">
          <Link to={`/projects/${_id}`}>
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

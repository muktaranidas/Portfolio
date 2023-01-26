import React from "react";
import { useLoaderData } from "react-router-dom";

const ProjectDetails = () => {
  const { image1, title, description } = useLoaderData();
  return (
    <div className="card w-96 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 shadow-xl">
      <figure className="projectSingleImage">
        <img src={image1} alt="Shoes" />
      </figure>
      <div className="card-body projectSingleBody">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        {/* <div className="card-actions justify-end">
          <button className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-5">
            Explore More
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ProjectDetails;

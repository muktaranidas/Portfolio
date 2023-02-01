import React from "react";
import { Link } from "react-router-dom";
import "./SingleProject.css";
import whichBook from "../../assets/projects/whichBook.png";
import muktasKitchen from "../../assets/projects/mukta'sKitchen.png";
import heroQuiz from "../../assets/projects/heroQuiz.png";

const SingleProjects = ({ project }) => {
  const { title, description, image, link } = project;
  return (
    <div className="max-w-xs p-6 rounded-md shadow-md bg-gray-900 text-gray-50">
      <img
        src={image}
        alt=""
        className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
      />
      <div className="mt-6 mb-2">
        <h2 className="text-xl font-semibold tracking-wide">{title}</h2>
      </div>
      <p className="dark:text-gray-100 ">{description}</p>
    </div>
  );
};

export default SingleProjects;

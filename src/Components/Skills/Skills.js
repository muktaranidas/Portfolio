import React from "react";
import CardSkills from "./CardSkills";
import "./Skills.css";
import mukta from "../../assets/Share.jpg";

const Skills = () => {
  const skills = [
    {
      id: "2",
      title: "JavaScript",
      description:
        "This project is about give review on food. This project includes a React.js frontend and a back-end server in Node. A MongoDB database is used to store the data and uses Firebase for authentication and also JWT security system.",
      live: "https://my-kitchen-8b2f9.web.app/",
    },
    {
      id: "1",
      title: "React",
      description:
        "Different login system Admin, Buyer, Seller and individual dashboard. This project includes a React.js frontend and a back-end server in Node. A MongoDB database is used to store the data and uses Firebase for authentication and also JWT security system. Client side host in firebase and server side host",
      live: "https://which-book.web.app/",
    },
    {
      id: "3",
      title: "Node",
      description:
        "This project is about develop quiz website with React Router.	Hero Quiz is my frontend website",
      live: "https://relaxed-capybara-5ec20c.netlify.app/",
    },
  ];
  return (
    <div className="my-32" id="skills">
      <h2 className="text-6xl font-bold mt-10 animate-bounce text-center ">
        My Skill
      </h2>

      <div className="pr-4">
        <ul className=" skills-ul font-bold   text-white ">
          <li className="html my-6  text-pink-500">HTML5</li>
          <li className="css my-8 text-pink-500">CSS3</li>
          <li className="bootstrap my-8  text-pink-500">Bootstrap</li>
          <li className="tailwind my-8  text-pink-500">Tailwind</li>
          <li className="javascript my-8  text-pink-500">JavaScript</li>
          <li className="react my-8  text-pink-500">React</li>
          <li className="react-router my-8  text-pink-500">React Router</li>
          <li className="react-bootstrap  my-8  text-pink-500">
            React Bootstrap
          </li>
          <li className="node my-8  text-pink-500">Node.js</li>
          <li className="express my-8  text-pink-500">Express.js</li>
          <li className="mongodb my-8  text-pink-500">MongoDB</li>
          <li className="firebase my-8  text-pink-500">Firebase</li>
        </ul>
      </div>
    </div>

    // <div className="my-32" id="skills">
    //   <h2 className="text-6xl font-bold mt-12 animate-bounce text-center my-12">
    //     My Skill
    //   </h2>
    //   <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">
    //     {skills.map((skill) => (
    //       <CardSkills key={skill.id} skill={skill}></CardSkills>
    //     ))}
    //   </div>
    // </div>
  );
};

export default Skills;

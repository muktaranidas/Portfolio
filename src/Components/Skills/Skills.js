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
    <div className="my-32 text-white" id="skills">
      <h2 className="text-6xl font-bold mt-10 animate-bounce text-center ">
        My Skills
      </h2>

      <div className="pr-4 ">
        <div className="grid grid-cols-2 gap-32  mx-24  skills-ul font-bold text-white">
          <ul>
            <li className="html my-6  text-white">HTML5</li>
            <li className="css my-8 text-white">CSS3</li>
            <li className="bootstrap my-8  text-white">Bootstrap</li>
            <li className="tailwind my-8  text-white">Tailwind</li>
            <li className="javascript my-8  text-white">JavaScript</li>
            <li className="react my-8 text-white">React</li>
            <li className="react-router my-8  text-white">React Router</li>
          </ul>
          <ul>
            <li className="react-bootstrap  my-8  text-white">
              React Bootstrap
            </li>
            <li className="jquery  my-8  text-white">JQuery</li>
            <li className="redux  my-8  text-white">Redux</li>
            <li className="node my-8  text-white">Node.js</li>
            <li className="express my-8  text-white">Express.js</li>
            <li className="mongodb my-8  text-white">MongoDB</li>
            <li className="firebase my-8  text-white">Firebase</li>
          </ul>
        </div>
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

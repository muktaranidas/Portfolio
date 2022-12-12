// import { transparent } from "daisyui/src/colors";
import React from "react";
// import treatment from "../../../../assets/images/treatment.png";
// import PrimaryButton from "../../../../Components/PrimaryButton/PrimaryButton";
import mukta from "../../assets/jacket.jpg";

const About = () => {
  return (
    <div>
      <h2
        className="text-6xl font-bold mt-12 animate-bounce text-center "
        id="about"
      >
        About Me
      </h2>
      <div className="grid grid-cols lg:grid-cols-2   my-24">
        <figure>
          <img className="w-9/12 mt-4 mx-12 " src={mukta} alt="" />
        </figure>
        <div className="font-bold w-9/12 py-12">
          <h2 className=" text-5xl font-bold">Mukta Rani Das</h2>
          <p className=" py-6">
            I am a Web Developer. I can develop systems/solutions for
            enterprises and organizations so that they can easily maintain their
            organization. I have learned HTML, CSS, JavaScript, Bootstrap,
            Tailwind, React.js, React Router, React Bootstrap, Node.js,
            Express.js MongoDB, Firebase etc. I can do efficient and scalable
            development so that you can easily manage your organization with
            minimal cost.
          </p>
          {/* <PrimaryButton>Get STARTED</PrimaryButton> */}
        </div>
      </div>
    </div>
  );
};

export default About;

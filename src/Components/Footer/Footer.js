import React from "react";
import logo from "../../assets/Share.jpg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer p-10  text-white">
      <div>
        <img className="footer-img" src={logo} alt="" />
        <p>
          Mukta Rani Das
          <br />
          B.Sc in Software Engineering
        </p>
      </div>
      <div>
        <span className="footer-title">Univercity</span>
        <a className="link link-hover">Daffodil</a>
        <a className="link link-hover">International</a>
        <a className="link link-hover">University</a>
      </div>
      <div>
        <span className="footer-title">College</span>
        <a className="link link-hover">Cambrian </a>
        <a className="link link-hover">School & </a>
        <a className="link link-hover"> College</a>
      </div>
      <div>
        <span className="footer-title">Dream</span>
        <a className="link link-hover">Full Stack Developer</a>
        <a className="link link-hover">MERN Stack Developer</a>
        <a className="link link-hover">Software</a>
      </div>
    </footer>
  );
};

export default Footer;

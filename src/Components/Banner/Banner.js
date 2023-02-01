import React, { useEffect, useState } from "react";
import TrackVisibility from "react-on-screen";
import { Link } from "react-router-dom";
import profile from "../../assets/mukta.jpg";
import "./Banner.css";
import resume from "../../assets/resume.png";

const Banner = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Web Developer",
    "MERN Stack Developer",
    "Software Engineer",
  ];
  const period = 1000;
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  return (
    <div className="hero  my-32">
      <div className="hero-content flex-col lg:flex-row">
        <TrackVisibility>
          {({ isVisible }) => (
            <div
              className={isVisible ? "animate__animated animate__fadeIn" : ""}
            >
              <button className="my-6 btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-5">
                Welcome to my Portfolio
              </button>
              <h1 className="text-6xl font-bold">
                {`Hi   I'm Mukta`}{" "}
                <span
                  className="txt-rotate text-6xl font-bold"
                  dataPeriod="1000"
                  data-rotate='["Web Developer", "MERN Stack Developer", "Software Engineer"]'
                >
                  <span className="wrap">{text}</span>
                </span>
              </h1>
              <p className="my-6 ">
                I am a Web Developer. I can develop systems/solutions for
                enterprises and organizations so that they can easily maintain
                their organization. I have learned HTML, CSS, JavaScript,
                Bootstrap, Tailwind, React.js, React Router, React Bootstrap,
                Node.js, Express.js MongoDB, Firebase etc. I can do efficient
                and scalable development so that you can easily manage your
                organization with minimal cost.
              </p>

              <button
                className="btn bg-indigo-500"
                onClick={() =>
                  openInNewTab(
                    "https://drive.google.com/drive/folders/1hxGW7C6pznDhMNg87w0UsHz0a5dRcSUQ?usp=share_link"
                  )
                }
              >
                My Resume
              </button>
            </div>
          )}
        </TrackVisibility>
        <TrackVisibility>
          {({ isVisible }) => (
            <div className="animate-pulse">
              <img className="rounded-full " src={profile} alt="Header Img" />
            </div>
          )}
        </TrackVisibility>
      </div>
    </div>
  );
};

export default Banner;

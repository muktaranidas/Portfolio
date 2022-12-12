import React from "react";
import contact from "../../assets/contact.jpg";

const Contact = () => {
  return (
    // <section style={{ background: `url(${contact})` }}>
    <section id="contact">
      <div className="text-center mt-28 py-6">
        <h2 className="  text-6xl font-bold mt-12 animate-bounce ">
          Get In Touch
        </h2>
      </div>
      <div className="">
        <div className=" pb-28">
          <form
            action="https://formsubmit.co/mukta35-2733@diu.edu.bd"
            method="POST"
            className="  grid grid-cols-1  text-black align-items-center justify-items-center "
          >
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="input input-bordered input-primary w-96 my-4"
            />
            <input
              name="email"
              type="email"
              placeholder="Email address"
              className="input input-bordered input-primary w-96 my-4"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input input-bordered input-primary text-black  w-96 my-4"
            />
            <textarea
              className="textarea textarea-primary my-4 w-96"
              placeholder="Your message"
              name="text-area"
            ></textarea>
            <button className="my-6 w-2/12	 btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-5">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

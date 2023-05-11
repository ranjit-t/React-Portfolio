import React from "react";
import LineGradient from "../Components/LineGradient";
import "./Contact.css";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // alert("done");
  };
  return (
    <div id="contact" className="contact">
      <div className=" w-full flex align-middle justify-center mb-10 mt-16">
        <p className="font-playfair font-semibold text-4xl mb-5">
          <span className="text-red">CO</span>NTACT
          <LineGradient width="w-60 mt-0" />
        </p>
      </div>
      <div className="contact-content mb-10">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            <input type="email" placeholder="Email" required />
          </label>
          <label>
            <input type="text" placeholder="Full Name" required />
          </label>
          <label>
            <input type="subject" placeholder="Subject" required />
          </label>
          <label>
            <textarea rows="10" placeholder="Message" required />
          </label>
          <button className="form-btn">Submit</button>
        </form>
        <div className="email-add">
          <p className=" mb-10 font-playfair font-semibold text-4xl mb-5 text-blue">
            SAY HELLO <span className="text-4xl ">👋</span>
          </p>
          {/* <p className="mb-10">
            Hello <span className="text-2xl ">👋</span>
          </p> */}
          <a href="mailto:amailtoranjith@gmail.com">
            <p>amailtoranjith@gmail.com</p>
          </a>
        </div>
      </div>
      <div className="footer">
        <p>Made with ❤ by Ranjith Thota</p>
      </div>
    </div>
  );
}

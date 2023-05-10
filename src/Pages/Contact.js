import React from "react";
import LineGradient from "../Components/LineGradient";
import "./Contact.css";

export default function Contact() {
  return (
    <div id="contact" className="contact">
      <div className=" w-full flex align-middle justify-center mb-10 mt-16">
        <p className="font-playfair font-semibold text-4xl mb-5">
          <span className="text-red">CO</span>NTACT
          <LineGradient width="w-60 mt-0" />
        </p>
      </div>
      <div className="contact-content mb-10">
        <form className="contact-form">
          <label>
            <p>Email</p>
            <input type="email" placeholder="email" />
          </label>
          <label>
            <p>Full Name</p>
            <input type="text" placeholder="full name" />
          </label>
          <label>
            <p>Subject</p>
            <input type="subject" placeholder="subject" />
          </label>
          <label>
            <p>Message</p>
            <textarea rows="10" placeholder="message"></textarea>
          </label>
          <button className="form-btn">Submit</button>
        </form>
        <div className="email-add">
          <p className="mb-10">
            Hello <span className="text-2xl">👋</span>
          </p>
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

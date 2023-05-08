import React from "react";
import "./Landing.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Landing() {
  return (
    <div className="landing h-screen">
      <div className="details">
        <div className="developer-name">
          <div className="first-name">
            <p>Ranjith</p>
          </div>
          <div className="last-name ">
            <p>Thota</p>
          </div>
        </div>
        <div className="developer-bio">
          <p className="text-2xl font-bold underline my-2">
            <b>Front End Developer</b>
          </p>
          <p className="text-2xl">Javascript || React.Js || React Native</p>
        </div>
        <div className="mt-8 flex flex-row justify-center">
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
            // onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            // onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
              Let's talk.
            </div>
          </AnchorLink>
        </div>
      </div>
      <div>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/aveyron-connect.appspot.com/o/rangreece.jpeg?alt=media&token=927b75f9-1601-4c99-9cac-b8ebd329974a"
          alt="profile"
          className="profile-photo"
        />
      </div>
    </div>
  );
}

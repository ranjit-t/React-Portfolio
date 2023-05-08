import React from "react";
import LineGradient from "../Components/LineGradient";
import "./MySkills.css";

export default function MySkills() {
  return (
    <div className="my-skills">
      <div className="flow flow-column align-middle justify-center ">
        <p className="font-playfair font-semibold text-4xl mb-5 ">
          MY <span className="text-red">SKILLS</span>
        </p>
        <LineGradient width="w-100" />
        <p className="mt-10 mb-7">
          <b>Computer Languages :</b>
          <p>HTML, CSS, Sass, Javascript (ES6), Typescript</p>
        </p>
        <p className="mt-10 mb-7">
          <b>Frameworks/Libraries :</b>
          <p>React, React Native, Redux, Bootstrap, Tailwind, Material UI</p>
        </p>
        <p className="mt-10 mb-7">
          <b>Technologies/Tools :</b>
          <p>Node.Js, Express, MongoDB, Firebase, GIT/Github</p>
        </p>
        <p className="mt-10 mb-7">
          <b>UI/UX Design Tools :</b>
          <p>Adobe Photoshop, Illustrator, Figma</p>
        </p>
      </div>
      <div>
        <div
          className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1] "
        >
          <img
            alt="skills"
            className="z-10 max-w-[600px] rounded-lg"
            src="https://images.unsplash.com/photo-1613068687893-5e85b4638b56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          />
        </div>
      </div>
    </div>
  );
}

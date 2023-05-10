import React from "react";
import LineGradient from "../Components/LineGradient";
import "./MySkills.css";

export default function MySkills() {
  return (
    <div className="my-skills">
      <div className="flow flow-column align-middle justify-center ">
        <div className=" w-full flex align-middle justify-center">
          <p className="font-playfair font-semibold text-4xl mb-5 skills-heading">
            MY <span className="text-red">SKILLS</span>
            <LineGradient width="w-60" />
          </p>
        </div>

        <div className="skills-list">
          {" "}
          <div className="mt-10 mb-7">
            <p className="font-extrabold text-blue">Computer Languages :</p>
            <p>HTML, CSS, Sass, Javascript (ES6), Typescript</p>
          </div>
          <div className="mt-10 mb-7">
            <p className="font-extrabold text-blue">Frameworks/Libraries :</p>
            <p>React, React Native, Redux, Bootstrap, Tailwind, Material UI</p>
          </div>
          <div className="mt-10 mb-7">
            <p className="font-extrabold text-blue">Technologies/Tools :</p>
            <p>Node.Js, Express, MongoDB, Firebase, GIT/Github</p>
          </div>
          <div className="mt-10 mb-7">
            <p className="font-extrabold text-blue">UI/UX Design Tools :</p>
            <p>Adobe Photoshop, Illustrator, Figma</p>
          </div>
        </div>
      </div>
      <div className="skills-photo">
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

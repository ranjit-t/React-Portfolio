import "./App.css";
import LineGradient from "./Components/LineGradient";
import Contact from "./Pages/Contact";
import Landing from "./Pages/Landing";
import MySkills from "./Pages/MySkills";
import Projects from "./Pages/Projects";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import PageViewer from "./Components/PageViewer";
import Logo from "./Images/rtwhite.png";
import { Github } from "./Images/AllSVG.js";
import Linkedin from "./Images/linkedin.png";

function App() {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const [selectedPage, setSelectedPage] = useState("landing");
  return (
    <div className="App ">
      {/* <p className="logo">
        <b>RT</b>
      </p> */}

      <div className="logo">
        <img src={Logo} alt="logo" width="80px" />
      </div>
      <div>
        <motion.div
          amount="all"
          onViewportEnter={() => setSelectedPage("landing")}
        >
          <Landing style={{ width: windowSize.current[0] }} />
          <LineGradient className="mt-8"></LineGradient>
        </motion.div>
      </div>
      <div onViewportEnter={() => setSelectedPage("skills")}>
        <motion.div
          amount="all"
          onViewportEnter={() => setSelectedPage("skills")}
        >
          <MySkills></MySkills>
          <LineGradient className="mt-8"></LineGradient>
        </motion.div>
      </div>
      <div>
        <motion.div
          amount="all"
          onViewportEnter={() => setSelectedPage("projects")}
        >
          <Projects></Projects>
          <LineGradient className="mt-8"></LineGradient>
        </motion.div>
      </div>
      <div onViewportEnter={() => setSelectedPage("contact")}>
        <motion.div
          amount="all"
          onViewportEnter={() => setSelectedPage("contact")}
        >
          <Contact></Contact>
        </motion.div>
      </div>
      <PageViewer selectedPage={selectedPage}></PageViewer>
      <div className="contact-bar">
        <div className="github-icon">
          <a
            href="https://github.com/ranjit-t/"
            target="_blank"
            rel="noreferrer"
          >
            <Github fill="white" width="29px" />
          </a>
        </div>
        <a
          href="https://www.linkedin.com/in/ranjit-t8/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Linkedin} alt="Linkedin" width="36px" />
        </a>

        <hr />
      </div>
    </div>
  );
}

export default App;

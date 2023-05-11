import "./App.css";
import LineGradient from "./Components/LineGradient";
import Contact from "./Pages/Contact";
import Landing from "./Pages/Landing";
import MySkills from "./Pages/MySkills";
import Projects from "./Pages/Projects";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

function App() {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const [selectedPage, setSelectedPage] = useState("landing");
  return (
    <div className="App ">
      <p className="logo">
        <b>RT</b>
      </p>
      <div>
        <motion.div
          // margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("landing")}
        >
          <Landing style={{ width: windowSize.current[0] }} />
          <LineGradient className="mt-8"></LineGradient>
        </motion.div>
      </div>
      <div onViewportEnter={() => setSelectedPage("skills")}>
        <motion.div
          // margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("skills")}
        >
          <MySkills></MySkills>
          <LineGradient className="mt-8"></LineGradient>
        </motion.div>
      </div>
      <div>
        <motion.div
          // margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("projects")}
        >
          <Projects></Projects>
          <LineGradient className="mt-8"></LineGradient>
        </motion.div>
      </div>
      <div onViewportEnter={() => setSelectedPage("contact")}>
        <motion.div
          // margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("contact")}
        >
          <Contact></Contact>
        </motion.div>
      </div>
      <div className="page-viewer">
        <div className={selectedPage === "landing" ? "active" : ""}>
          <a
            href="#landing"
            style={{
              minHeight: "30px",
              minWidth: "30px",
              display: "inline-block",
            }}
          >
            {" "}
          </a>
        </div>
        <div className={selectedPage === "skills" ? "active" : ""}>
          <a
            href="#skills"
            style={{
              minHeight: "30px",
              minWidth: "30px",
              display: "inline-block",
            }}
          >
            {" "}
          </a>
        </div>
        <div className={selectedPage === "projects" ? "active" : ""}>
          <a
            href="#projects"
            style={{
              minHeight: "30px",
              minWidth: "30px",
              display: "inline-block",
            }}
          >
            {" "}
          </a>
        </div>
        <div className={selectedPage === "contact" ? "active" : ""}>
          <a
            href="#contact"
            style={{
              minHeight: "30px",
              minWidth: "30px",
              display: "inline-block",
            }}
          >
            {" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;

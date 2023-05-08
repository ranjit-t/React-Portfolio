import "./App.css";
import LineGradient from "./Components/LineGradient";
import Landing from "./Pages/Landing";
import MySkills from "./Pages/MySkills";
import Projects from "./Pages/Projects";
import { useRef } from "react";

function App() {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  return (
    <div className="App ">
      <p className="logo">
        <b>RT</b>
      </p>
      <div>
        <Landing style={{ width: windowSize.current[0] }}></Landing>
        <LineGradient className="mt-8"></LineGradient>
      </div>
      <div>
        <MySkills></MySkills>
        <LineGradient className="mt-8"></LineGradient>
      </div>
      <div>
        <Projects></Projects>
        <LineGradient className="mt-8"></LineGradient>
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import LineGradient from "./Components/LineGradient";
import Landing from "./Pages/Landing";
import MySkills from "./Pages/MySkills";
import Projects from "./Pages/Projects";

function App() {
  return (
    <div className="App ">
      <p className="logo">
        <b>RT</b>
      </p>
      <div>
        <Landing></Landing>
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

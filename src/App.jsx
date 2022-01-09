import About from "./components/About/About";
import Intro from "./components/Intro/Intro";
import './App.css';
import ProjectList from "./components/ProjectList/ProjectList";
import Contact from "./components/Contact/Contact";
import Toggle from "./components/Toggle/Toggle";

function App() {

  return (
    <div className="App">
      <Toggle/>
      <Intro />
      <About />
      <ProjectList />
      <Contact />
    </div>
  );
}

export default App;

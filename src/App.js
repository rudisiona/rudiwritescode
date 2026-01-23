import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
// import Projects from "./pages/Projects";
import One from "./pages/projects/1"
import Two from "./pages/projects/2"
import Three from "./pages/projects/3"
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
        <Route path='/projects/1' element={<One />} />
        <Route path='/projects/2' element={<Two />} />
        <Route path='/projects/3' element={<Three />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

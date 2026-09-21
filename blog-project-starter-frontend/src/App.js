import Home from "./components/Home";

import About from "./components/About";
import Project from './components/Project'
import Certificate from './components/Certificate'
import Contact from "./components/Contact";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="w-full min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden m-0 p-0">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        
          <Route path="/about" element={<About />} />

          <Route path="/project" element={<Project />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/contact" element={<Contact />} />
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}





export default App;
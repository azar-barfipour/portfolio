import React from "react";
import { Routes, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Tools from "./components/Tools";
import Contact from "./components/Contact";
import ParticlesBg from "particles-bg";
import ThemeContext from "./store/theme-context";

import "./App.css";

function App() {
  return (
    // <ThemeContext.Consumer>
    <>
      <ParticlesBg color="#222" num={1000} type="lines" bg={true} />
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
    // </ThemeContext.Consumer>
  );
}

export default App;

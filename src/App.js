import React from "react";

import Footer from "./components/Footer";
import Projects from "./components/Projects";
import ProjectForm from "./components/ProjectForm";

import "./App.scss";

require('dotenv').config()

console.log(process.env.REACT_APP_TEST)
function App() {
  return (
    <div className="App">
      <h1>Lambda App Store!</h1>
      <div className="banana">
        <Projects />
        <ProjectForm />
        <Footer />
      </div>
    </div>
  );
}

export default App;

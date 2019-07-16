import React from "react";

import Projects from "./components/Projects";
import ProjectForm from "./components/ProjectForm";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Lambda App Store!</h1>
      <div className="banana">
        <Projects />
        <ProjectForm />
      </div>
    </div>
  );
}

export default App;

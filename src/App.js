import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Footer from "./components/Footer";
import Projects from "./components/Projects";
import ProjectForm from "./components/ProjectForm";

import "./App.scss";

require("dotenv").config();

console.log(process.env.REACT_APP_TEST);
function App() {
  return (
    <Router>
      <div className="App">
        <h1>Lambda App Store!</h1>
        <div className="banana">
          <Projects />
          <ProjectForm />
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;

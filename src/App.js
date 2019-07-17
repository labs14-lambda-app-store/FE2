import React from "react";

import Footer from "./components/Footer";
import Projects from "./components/Projects";
import ProjectForm from "./components/ProjectForm";

import auth0Client from './components/Auth/Auth'
import "./App.scss";

require('dotenv').config()


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

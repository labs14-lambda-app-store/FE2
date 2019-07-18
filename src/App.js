import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Footer from "./components/Footer";
import Projects from "./components/Projects";
import ProjectForm from "./components/ProjectForm";
import {Callback, AuthButton} from './components/Auth'
import { Route } from 'react-router-dom'

import "./App.scss";

require("dotenv").config();


const App = () => {

  return (
    <Router>
      <div className="App">
        <h1>Lambda App Store!</h1>
        <AuthButton />
        <div className="banana">
          <Projects />
          <ProjectForm />
          <Footer />
        </div>

        <Route exact path='/callback' component={Callback} />
      </div>
    </Router>
  );
}

export default App;

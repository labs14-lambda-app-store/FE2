import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Footer from "./components/Footer";
import Projects from "./components/Projects";
import ProjectForm from "./components/ProjectForm";
import ProjectSearch from './components/ProjectSearch';
import {Callback, AuthButton} from './components/Auth';
import { Route } from 'react-router-dom';
import { useAuth0 } from './components/Auth/react-auth0-spa';
import "./App.scss";

require("dotenv").config();


const App = () => {
  const { loading } = useAuth0()

  if(loading) return "Loading..."
  return (
    <Router>
      <div className="App">
        <h1>Lambda App Store!</h1>
        <AuthButton />
        <div className="banana">
          <ProjectSearch />
          <ProjectForm />
          <Footer />
        </div>

        <Route exact path='/callback' component={Callback} />
      </div>
    </Router>
  );
}

export default App;

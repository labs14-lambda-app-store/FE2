import React from "react"
import { BrowserRouter as Router } from "react-router-dom"

import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import ProjectForm from "./components/SubmissionForm/ProjectForm"
import ProjectSearch from "./components/ProjectSearch"
import { Route } from "react-router-dom"
import { useAuth0 } from "./components/Auth/react-auth0-spa"

import "./App.scss"

const App = () => {
  const { loading } = useAuth0()

  if (loading) return "Loading..."
  return (
    <Router>
      <div className="App">
        <NavBar />
        <h1>Lambda App Store!</h1>

        <div className="banana"></div>

        <Route exact path="/" component={Home} />
        <Route exact path="/project-form" component={ProjectForm} />
        <Route path="/projects" exact component={ProjectSearch} />
        <Footer />
      </div>
    </Router>
  )
}

export default App

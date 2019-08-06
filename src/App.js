import React from "react"
import { BrowserRouter as Router } from "react-router-dom"

import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import ProjectForm from "./components/SubmissionForm/ProjectForm"
import { ProjectSearch } from "./components/ProjectCard"
import { Route } from "react-router-dom"
import { useAuth0 } from "./components/Auth/react-auth0-spa"

import "./App.scss"
import Header from "./components/Header"
import PendingSearch from "./components/Admin/PendingSearch";

const App = () => {
  const { loading } = useAuth0()

  if (loading) return null
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Header />

        <Route exact path="/" component={Home} />
        <Route exact path="/project-form" component={ProjectForm} />
        <Route path="/projects" exact component={ProjectSearch} />
        <Route path="/pending-projects" exact component={PendingSearch} />
        <Footer />
      </div>
    </Router>
  )
}

export default App

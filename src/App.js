import React, { useEffect } from "react"
import { useAuth0 } from "./components/Auth/react-auth0-spa"
import { connect } from "react-redux"
import { loginUser } from "./actions"
import { BrowserRouter as Router } from "react-router-dom"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core"
import { Route } from "react-router-dom"

import ProjectForm from "./components/SubmissionForm/ProjectForm"
import PendingSearch from "./components/Admin/PendingSearch"
import { ProjectSearch } from "./components/ProjectCard"
import ProtectedRoute from "./components/Auth/ProtectedRoute"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"

import "./App.scss"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1a61b0",
      contrastText: "#efeef3",
    },
    secondary: {
      main: "#f32667",
      contrastText: "#efeef3",
    },
  },
})

const App = ({ loginUser, user }) => {
  const { loading } = useAuth0()

  useEffect(() => {
    loginUser()
  }, [loginUser])

  if (loading) return null

  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <NavBar />
          <Header />

          <Route exact path="/" component={Home} />
          <ProtectedRoute exact path="/project-form" component={ProjectForm} />
          <Route path="/projects" exact component={ProjectSearch} />
          <ProtectedRoute
            path="/pending-projects"
            exact
            adminRoute
            component={PendingSearch}
          />
          <Footer />
        </div>
      </MuiThemeProvider>
    </Router>
  )
}

const mapStateToProps = ({ usersReducer }) => {
  return {
    user: { ...usersReducer },
  }
}
export default connect(
  mapStateToProps,
  { loginUser }
)(App)

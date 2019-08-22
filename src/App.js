import React, { useEffect } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { useAuth0 } from "./components/Auth/react-auth0-spa"
import { connect } from "react-redux"
import { loginUser } from "./actions"

import ProtectedRoute from "./components/Auth/ProtectedRoute"
import AppForm from "./components/SubmissionForm/AppForm"
import { AppsGallery } from "./components/AppCard"
import Home from "./components/LandingPage/Home"
import { NavBar, Footer } from "./components/reusable"

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core"
import "./App.scss"
import Dashboard from "./components/Dashboard/Dashboard";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Lato",
  },
  palette: {
    primary: {
      main: "#1a61b0",
      contrastText: "#efeef3",
    },
    secondary: {
      main: "#f32667",
      contrastText: "#efeef3",
    },
    lambdaRed: {
      main: "#bb1333",
      contrastText: "#efeef3",
    },
    lambdaTeal: {
      main: "#3ab5e5",
      contrastText: "#efeef3",
    },
    tetiary: {
      main: "#f32667",
      contrastText: "#00000",
    },
  },
})

const App = ({ loginUser }) => {
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
          <Route exact path="/" component={Home} />
          <ProtectedRoute exact path="/app-form" component={AppForm} />
          <Route path="/apps" exact component={AppsGallery} />
          <ProtectedRoute path="/dashboard" component={Dashboard} />
          <ProtectedRoute
            path="/pending-apps"
            exact
            adminRoute
            //adding appType because this is a AppsGallery component
            appType="pending"
            component={AppsGallery}
          />
          <Footer />
        </div>
      </MuiThemeProvider>
    </Router>
  )
}

export default connect(
  null,
  { loginUser }
)(App)

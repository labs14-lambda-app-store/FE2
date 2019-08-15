import React, { useEffect } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { useAuth0 } from "./components/Auth/react-auth0-spa"
import { connect } from "react-redux"
import { loginUser } from "./actions"

import ProtectedRoute from "./components/Auth/ProtectedRoute"
import PendingSearch from "./components/Admin/PendingSearch"
import AppForm from "./components/SubmissionForm/AppForm"
import { AppSearch } from "./components/AppCard"
import NavBar from "./components/reusable/NavBar"
import Footer from "./components/reusable/Footer"
import Header from "./components/reusable/Header"
import Home from "./components/LandingPage/Home"

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core"
import "./App.scss"

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
      main: "#3ab5e5" ,
      contrastText: "#efeef3",
    }
  }
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
          <ProtectedRoute exact path="/app-form" component={AppForm} />
          <Route path="/apps" exact component={AppSearch} />
          <ProtectedRoute
            path="/pending-apps"
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

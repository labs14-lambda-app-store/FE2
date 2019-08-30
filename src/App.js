import React, { useEffect } from "react"
import { connect } from "react-redux"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import ProtectedRoute from "./components/Auth/ProtectedRoute"
import { useAuth0 } from "./components/Auth/react-auth0-spa"
import Dashboard from "./components/Dashboard/Dashboard"
import { NavBar, Footer } from "./components/reusable"
import AppPage from "./components/AppPage/AppPage"
import { AppsGallery } from "./components/AppCard"
import Home from "./components/LandingPage/Home"
import NotFound from "./components/404/NotFound"
import { loginUser, getUser } from "./actions"
import theme from "./utils/theme"

import { MuiThemeProvider } from "@material-ui/core"
import "./App.scss"

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
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/appPage/:id" component={AppPage} />
            <Route path="/apps" exact component={AppsGallery} />
            <Route path="/appPage/:id" component={AppPage} />
            <ProtectedRoute path="/dashboard" component={Dashboard} />
            <ProtectedRoute
              path="/pending-apps"
              exact
              adminRoute
              //adding appType because this is a AppsGallery component
              appType="pending"
              component={AppsGallery}
            />
            <Route path="*" component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </MuiThemeProvider>
    </Router>
  )
}

export default connect(
  null,
  { loginUser, getUser }
)(App)

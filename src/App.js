import React, { useEffect } from "react"
import { connect } from "react-redux"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import theme from "./utils/theme"
import { loginUser } from "./actions"
import Home from "./components/LandingPage/Home"
import NotFound from "./components/404/NotFound"
import { AppsGallery } from "./components/AppCard"
import AppPage from "./components/AppPage/AppPage"
import { NavBar, Footer } from "./components/reusable"
import Dashboard from "./components/Dashboard/Dashboard"
import { useAuth0 } from "./components/Auth/react-auth0-spa"
import ProtectedRoute from "./components/Auth/ProtectedRoute"

import "./App.scss"
import { MuiThemeProvider } from "@material-ui/core"

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
  { loginUser }
)(App)

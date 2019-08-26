import React, { useEffect } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { useAuth0 } from "./components/Auth/react-auth0-spa"
import { connect } from "react-redux"
import { loginUser } from "./actions"
import theme from "./utils/theme"
import ProtectedRoute from "./components/Auth/ProtectedRoute"
import { AppsGallery } from "./components/AppCard"
import Home from "./components/LandingPage/Home"
import { NavBar, Footer } from "./components/reusable"
import { MuiThemeProvider } from "@material-ui/core"
import "./App.scss"
import Dashboard from "./components/Dashboard/Dashboard"
import NotFound from './components/404/NotFound'
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

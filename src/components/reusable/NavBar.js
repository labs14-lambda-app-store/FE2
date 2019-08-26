import React from "react"
import { connect } from "react-redux"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"
import AuthButton from "../Auth/AuthButton"
import { withRouter } from "react-router-dom"
import redLambdaLogo from "../../assets/Lambda_Logo.png"

const buttonSelector = () => {
  if (window.location.pathname === "/" || '') {
    return "home-button"
  } else if (window.location.pathname === "/apps") {
    return "apps-button"
  } else if (window.location.pathname === "/pending-apps") {
    return "pending-apps-button"
  } else if (window.location.pathname === '/submit-app') {
    return 'submit-button'
  }
}

const NavBar = props => {
  const [activeButton, setActiveButton] = React.useState(buttonSelector())

  const { user, history, location } = props
  if (location.pathname.includes("/dashboard")) {
    return null
  } else {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <img
              className="Header-lambda-logo"
              src={redLambdaLogo}
              alt="red lambda logo"
              onClick={() => history.push("/")}
            />

            {/* Using button onClick to avoid Link bug that prevents route changes,
                          when using material-ui */}
            <div className="buttons">
              <Button
                onClick={() => {
                  setActiveButton("home-button")
                  history.push("/")
                }}
                style={{
                  color: activeButton === "home-button" ? "#3ab5e5" : "black",
                }}
              >
                Home
              </Button>
              <Button
                onClick={() => {
                  setActiveButton("apps-button")
                  history.push("/apps")
                }}
                style={{
                  color: activeButton === "apps-button" ? "#3ab5e5" : "black",
                }}
              >
                Apps
              </Button>

              {/* if there is a user, and the user's roll is admin, show pending apps nav button, else if there is a user and the user's role isn't admin, show the submit form nav button. else don't show either buttons */}
              {user ? (
                user.role === "admin" ? (
                  <Button
                    onClick={() => {
                      setActiveButton("pending-apps-button")
                      history.push("/pending-apps")
                    }}
                    style={{
                      color:
                        activeButton === "pending-apps-button"
                          ? "#3ab5e5"
                          : "black",
                    }}
                  >
                    Pending Apps
                  </Button>
                ) : (
                  <Button
                    className="appFormButton"
                    onClick={() => {
                      setActiveButton('submit-button')
                      history.push("/dashboard/submit-app")
                    }}
                  >
                    Submit App
                  </Button>
                )
              ) : null}

              <AuthButton />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

const mapStateToProps = ({ usersReducer }) => {
  return {
    ...usersReducer,
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(NavBar)
)

import React from "react"
import { connect } from "react-redux"

import AppBar from "@material-ui/core/AppBar"
import Button from "@material-ui/core/Button"
import Toolbar from "@material-ui/core/Toolbar"

import AuthButton from "../Auth/AuthButton"
import { withRouter } from "react-router-dom"
import redLambdaLogo from "../../assets/Lambda_Logo.png"

const NavBar = ({ user, history, location, message }) => {
  //location.pathname is default value for activeButton
  const [activeButton, setActiveButton] = React.useState(location.pathname)

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
              {/* <Button
                onClick={() => {
                  //setActiveButton to matching route
                  setActiveButton('/')
                  history.push("/")
                }}
                //check to see if activeButton is current route, set style based on conditional
                style={{
                  color: activeButton === '/' || '' ? "#3ab5e5" : "black",
                }}
              >
                Home
              </Button> */}
              <Button
                onClick={() => {
                  setActiveButton("/")
                  history.push("/")
                }}
                style={{
                  color: activeButton === "/" ? "#3ab5e5" : "black",
                }}
              >
                Apps
              </Button>

              {/* if there is a user, and the user's roll is admin, show pending apps nav button, else if there is a user and the user's role isn't admin, show the submit form nav button. else don't show either buttons */}
              {user ? (
                user.role === "admin" ? (
                  <Button
                    onClick={() => {
                      setActiveButton("/pending-apps")
                      history.push("/pending-apps")
                    }}
                    style={{
                      color:
                        activeButton === "/pending-apps" ? "#3ab5e5" : "black",
                    }}
                  >
                    Pending Apps
                  </Button>
                ) : null
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

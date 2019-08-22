import React from "react"
import { connect } from "react-redux"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"
import AuthButton from "../Auth/AuthButton"
import { MemoryRouter as Router, withRouter } from "react-router-dom"
import redLambdaLogo from "../../assets/Lambda_Logo.png"

const NavBar = (props) => {
  const { user, history, location } = props
  if (location.pathname.includes("/dashboard")) {
    return null;
  } else {
    return (
      <Router>
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
                <Button onClick={() => history.push("/")}>Home</Button>
                <Button
                  onClick={() => {
                    history.push("/apps")
                  }}
                >
                  Apps
                </Button>

                {/* if there is a user, and the user's roll is admin, show pending apps nav button, else if there is a user and the user's role isn't admin, show the submit form nav button. else don't show either buttons */}
                {user ? (
                  user.role === "admin" ? (
                    <Button
                      className="pendingAppsButton"
                      onClick={() => history.push("/pending-apps")}
                    >
                      Pending Apps
                    </Button>
                  ) : (
                      <Button
                        className="appFormButton"
                        onClick={() => history.push("/app-form")}
                      >
                        Submit App
                    </Button>
                    )
                ) : null}

                <Button onClick={() => history.push("/dashboard")}>Dashboard</Button>

                < AuthButton />
              </div>
            </Toolbar>
          </AppBar>
        </div>
      </Router>
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

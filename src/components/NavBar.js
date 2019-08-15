import React from "react"
import { connect } from "react-redux"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"
import { AuthButton } from "./Auth"
import { MemoryRouter as Router, withRouter } from "react-router-dom"
import redLambdaLogo from "../assets/Lambda_Logo.png"
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

// I've imported Material UI packages above,
// and implemented them in a functional component below

const NavBar = props => {
  const { user } = props
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <Router>
      <div>
        <AppBar position="static">
          <Toolbar>
            <img
              className="Header-lambda-logo"
              src={redLambdaLogo}
              alt="red lambda logo"
              onClick={() => props.history.push("/")}
            />

            {/* Using button onClick to avoid Link bug that prevents route changes,
                        when using material-ui */}
            <div className="buttons">
              <Button onClick={() => props.history.push("/")}>Home</Button>
              <Button
                onClick={() => {
                  props.history.push("/apps")
                }}
              >
                Apps
              </Button>

              {/* if there is a user, and the user's roll is admin, show pending apps nav button, else if there is a user and the user's role isn't admin, show the submit form nav button. else don't show either buttons */}
              {user ? (
                user.role === "admin" ? (
                  <Button
                    className="pendingAppsButton"
                    onClick={() => props.history.push("/pending-apps")}
                  >
                    Pending Apps
                    </Button>
                ) : (
                    <Button
                      className="appFormButton"
                      onClick={() => props.history.push("/app-form")}
                    >
                      Submit App
                    </Button>

                  )
              ) : null}

              <AuthButton />

            </div>

            <Button className="mobile-menu" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
              Open Menu
            </Button>
            <Menu
              className="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={() => props.history.push("/")}>Home</MenuItem>

              {user ? (
                user.role === "admin" ? (
                  <MenuItem onClick={() => props.history.push("/pending-apps")}
                  >
                    Pending Apps
                  </MenuItem>

                ) : (
                    <MenuItem onClick={() => props.history.push("/app-form")}
                    >
                      Submit App
                  </MenuItem>

                  )
              ) : null}

              <MenuItem>{<AuthButton />}</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </div>
    </Router>
  )
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

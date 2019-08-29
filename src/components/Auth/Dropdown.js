import React from "react"
import Cookie from "js-cookie"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

import { Popover } from "@material-ui/core"
import Button from "@material-ui/core/Button"
import MenuItem from "@material-ui/core/MenuItem"

import { useAuth0 } from "./react-auth0-spa.js"

const Dropdown = ({
  anchorEl,
  handleClose,
  history,
  handleClick,
  pictureURL,
}) => {
  const { logout } = useAuth0()

  const logoutWithRedirect = () => {
    Cookie.remove("user_id")
    logout({
      returnTo: window.location.origin,
    })
  }

  return (
    <>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        {/* if there is not a pictureURL, the material UI account icon appears */}
        {!pictureURL ? (
          <i id="account-box" class="material-icons">
            account_box
          </i>
        ) : (
          <img className="user-image" src={pictureURL} alt="user profile"></img>
        )}

        <i id="account-arrow" className="material-icons">
          {anchorEl === null ? "keyboard_arrow_down" : "keyboard_arrow_up"}
        </i>
      </Button>
      <Popover
        className="list-example"
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <MenuItem onClick={() => history.push("/dashboard/apps")}>
          My Apps
        </MenuItem>
        <MenuItem onClick={() => history.push("/dashboard/profile")}>
          My Profile
        </MenuItem>
        <MenuItem onClick={() => history.push("/dashboard/submit-app")}>
          Submit App
        </MenuItem>
        <MenuItem
          color="secondary"
          onClick={() => {
            logoutWithRedirect()
          }}
        >
          Sign Out
        </MenuItem>
      </Popover>
    </>
  )
}

const mapStateToProps = ({ usersReducer }) => {
  return { ...usersReducer.user }
}

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(Dropdown)
)

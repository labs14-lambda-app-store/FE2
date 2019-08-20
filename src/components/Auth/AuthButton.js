import React from "react"
import Button from "@material-ui/core/Button"
import Cookie from "js-cookie"
import { connect } from "react-redux"
import { useAuth0 } from "./react-auth0-spa.js"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import { Popover } from "@material-ui/core"

const AuthButton = ({ first_name, pictureURL }, user) => {
  const { loginWithRedirect, logout } = useAuth0()
  const [anchorEl, setAnchorEl] = React.useState(null)
  console.log(first_name, pictureURL)

  const handleClick = e => {
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const logoutWithRedirect = () => {
    Cookie.remove("user_id")
    logout({
      returnTo: window.location.origin,
    })
  }

  const userIDCookie = Cookie.get("user_id")

  return (
    <>
      {
        //displays sign in button if no user cookie found
      }
      {!userIDCookie && (
        <>
          <Button onClick={() => loginWithRedirect({})} color="secondary">
            Sign In
          </Button>
        </>
      )}
      {
        //displays sign out button if user cookie found
      }
      {userIDCookie && (
        <>
          {" "}
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            {!pictureURL ? (
              <i id='account-box' class="material-icons">account_box</i>
            ) : (
              <img
                className="user-image"
                src={pictureURL}
                alt="user profile"
              ></img>
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
            <MenuItem onClick={handleClose}>Edit Profile</MenuItem>
            <MenuItem onClick={handleClose}>My Apps</MenuItem>
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
      )}
    </>
  )
}

const mapStateToProps = ({ usersReducer }) => {
  return { ...usersReducer.user }
}
export default connect(
  mapStateToProps,
  {}
)(AuthButton)

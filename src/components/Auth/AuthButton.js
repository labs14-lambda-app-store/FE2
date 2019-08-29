import React from "react"
import Cookie from "js-cookie"

import Button from "@material-ui/core/Button"

import Dropdown from "./Dropdown"
import { useAuth0 } from "./react-auth0-spa.js"

const AuthButton = () => {
  const { loginWithRedirect } = useAuth0()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = e => {
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const userIDCookie = Cookie.get("user_id")

  return (
    <>
      {
        //displays sign in button if no user cookie found
      }
      {!userIDCookie ? (
        <Button onClick={() => loginWithRedirect({})} color="secondary">
          Sign In
        </Button>
      ) : (
        <Dropdown
          anchorEl={anchorEl}
          handleClose={handleClose}
          handleClick={handleClick}
        />
      )}
    </>
  )
}

export default AuthButton

import React from "react"
import Button from "@material-ui/core/Button"
import Cookie from "js-cookie"
import { useAuth0 } from "./react-auth0-spa.js"
import Dropdown from "./Dropdown"

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

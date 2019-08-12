import React from "react"
import Button from "@material-ui/core/Button"
import Cookie from "js-cookie"
import { connect } from "react-redux"
import { useAuth0 } from "./react-auth0-spa.js"

const AuthButton = ({ first_name }) => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0()

  const logoutWithRedirect = () => {
    Cookie.remove("user_id")
    logout({
      returnTo: window.location.origin,
    })
  }

  const userIDCookie = Cookie.get("user_id")

  return (
    <>
      {!userIDCookie && (
        <>
          <Button onClick={() => loginWithRedirect({})} color="secondary">
            Sign In
          </Button>
        </>
      )}
      {userIDCookie && (
        <>
          <label style={{ color: "#0c3c78", fontSize: "1.1rem" }}>
            Hello {first_name}!
          </label>
          <Button onClick={() => logoutWithRedirect()} color="secondary">
            Sign out
          </Button>
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

import React from "react"
import { useAuth0 } from './react-auth0-spa.js'

const AuthButton = props => {

  const { isAuthenticated, loginWithRedirect, logout, user} = useAuth0()

  const logoutWithRedirect = () => {
    logout({
      returnTo: window.location.origin
    })
  }

  return (
    <>
    {
      !isAuthenticated && (
        <>
        <button onClick={() => loginWithRedirect({})}> Sign In </button>
        </>
      )
    }
    {
      isAuthenticated && (
        <>
        <button onClick={() => logoutWithRedirect()}> Sign out </button>
        <h2>Hello {user.given_name}</h2>
        </>
      )

    }
    </>
  )
}

 export default AuthButton

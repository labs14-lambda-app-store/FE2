import React from "react"
import Button from '@material-ui/core/Button';

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
        <Button onClick={() => loginWithRedirect({})}> Sign In </Button>
        </>
      )
    }
    {
      isAuthenticated && (
        <>
        <Button onClick={() => logoutWithRedirect()}> Sign out </Button>
        </>
      )

    }
    </>
  )
}

 export default AuthButton

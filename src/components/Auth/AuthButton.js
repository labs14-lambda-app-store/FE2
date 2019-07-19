import React, {useState, useEffect} from "react"
import { useAuth0 } from './react-auth0-spa.js'

const AuthButton = props => {

  const { isAuthenticated, loginWithRedirect, loginWithPopup, logout, user} = useAuth0()

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
        {console.log(user)}
        </>
      )
    }
    {
      isAuthenticated && (
        <>
        <button onClick={() => logoutWithRedirect()}> Sign out </button>
        <img src={user.picture} alt="Profile"/>
        </>
      )

    }
    </>
  )
}

 export default AuthButton

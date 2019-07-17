import React, {useState, useEffect} from "react"
import auth0Client from './Auth'

const AuthButton = props => {

  const {
    signOut,
    signIn,
    isAuthenticated,
    getProfile,
  } = auth0Client

  return (
    <>
    {
      !isAuthenticated() &&
      <button onClick={signIn}>Sign In</button>
    }
    {
      isAuthenticated() &&
      <button onClick={signOut}>Sign Out</button>
    }
    </>
  )
}

 export default AuthButton

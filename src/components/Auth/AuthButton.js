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
    { }
  )
}

 export default AuthButton

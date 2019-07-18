import React, {useState, useEffect} from "react"
import auth0Client from './Auth'

const AuthButton = props => {

  const {
    signOut,
    signIn,
    isAuthenticated,
    getProfile,
  } = auth0Client

  useEffect(() => {
     console.log(getProfile())
  })
  return (
    <>
    {
      !isAuthenticated() &&
      <button onClick={() => signIn()}>Sign In</button>

    }
    {
      auth0Client.isAuthenticated() &&
      <div>
         <label>
            {getProfile().name}
         </label>
         <button className="btn btn-dark" onClick={() => {signOut()}}>Sign Out</button>
       </div>
    }
    </>
  )
}

 export default AuthButton

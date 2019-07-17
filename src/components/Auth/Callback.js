import React, {useState, useEffect} from "react"
import {withRouter} from 'react-router-dom';
import auth0Client from './Auth';

const Callback = props => {

  const { handleAuthentication } = auth0Client

  useEffect(() => {
    handleAuth()


  }, [])

  const handleAuth = async () => {
    await handleAuthentication()
    props.history.replace('/')
  }

  return (
    <p>Loading profile...</p>
  )
}

 export default withRouter(Callback)

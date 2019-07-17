import React, {useState, useEffect} from "react"
import {withRouter} from 'react-router-dom';
import auth0Client from './Auth';

const Callback = props => {


  async function handleAuthentication() {
    await auth0Client.handleAuthentication();
    props.history.replace('/')

  }

  useEffect(() => {
    handleAuthentication()

  }, [])


  return (
    <p>Loading profile...</p>
  )
}

 export default withRouter(Callback)

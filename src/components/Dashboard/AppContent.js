import React from "react"
import { connect } from "react-redux"
import Paper from "@material-ui/core/Paper"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"

const AppContent = ({ user, app }) => {
  const { id } = user
  const { display_image, name, description, category, is_approved } = app



  return (
    <>
      <h1>{name}</h1>
      <p>{description}</p>
    </>
  )
}

const mapStateToProps = ({ usersReducer, appsReducer }) => {
  return {
    ...usersReducer,
    ...appsReducer,
  }
}

export default connect(
  mapStateToProps,
  {}
)(AppContent)

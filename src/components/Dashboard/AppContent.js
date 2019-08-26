import React from "react"
import { connect } from "react-redux"
import Paper from "@material-ui/core/Paper"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import { updateApp } from "../../actions"

const AppContent = ({ user, app }) => {
  const { id } = user
  const { display_image, name, description, frontend_url, backend_url, hosted_url, category, is_approved } = app

  const [updatedApp, setUpdatedApp] = useState({
    display_image,
    name,
    description,
    frontend_url, 
    backend_url, 
    hosted_url,
    category,
    is_approved,
  })
  function handleUpdateApp(change, id) {
    updateApp(change, id).then(res => {
      window.location.reload()
    })
  }

  function handleChanges(e) {}

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

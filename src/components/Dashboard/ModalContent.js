import React, { useState } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import Button from "@material-ui/core/Button"
import Tooltip from "@material-ui/core/Tooltip"
import TextField from "@material-ui/core/TextField"
import { updateUser } from "../../actions"

const ProfileEditModalContent = ({
  user,
  setIsOpen,
  isModalOpen,
  updateUser,
}) => {
  const {
    id,
    role,
    sub_id,
    first_name,
    last_name,
    email,
    pictureURL,
    username,
  } = user

  const [updatedUser, setUpdatedUser] = useState({
    id,
    role,
    sub_id,
    first_name,
    last_name,
    email,
    pictureURL,
    username,
  })
  console.log("state", updatedUser.first_name)
  function handleDeny() {
    setIsOpen(!isModalOpen)
  }

  function handleUpdateUser( change, id) {
    updateUser(change, id).then(res => {
      setIsOpen(!isModalOpen)
      window.location.reload()
    })
  }

  const handleChanges = e => {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value })
    console.log("e", e.target)
  }

  return (
    <main className="profile-edit-modal-content">
      <div className="profile-edit-form">
        <TextField
          id="outlined-with-placeholder"
          margin="normal"
          variant="outlined"
          value={updatedUser.first_name}
          name="first_name"
          label="First Name"
          onChange={e => {
            handleChanges(e)
          }}
        />
        <TextField
          id="outlined-with-placeholder"
          margin="normal"
          variant="outlined"
          value={updatedUser.last_name}
          name="last_name"
          label="Last Name"
        />
        <TextField
          id="outlined-with-placeholder"
          margin="normal"
          variant="outlined"
          value={updatedUser.username}
          name="username"
          label="Username"
        />
        <TextField
          id="outlined-with-placeholder"
          margin="normal"
          variant="outlined"
          value={updatedUser.pictureURL}
          name="pictureURL"
          label="Avatar URL"
        />
      </div>
      <div className="profile-edit-buttons">
        <Tooltip title="Approve" placement="top">
          <Button
            className="profile-edit-button"
            size="small"
            color="primary"
            onClick={() => handleUpdateUser(updatedUser, id)}
          >
            <i class="fas fa-check-circle fa-2x"></i>
          </Button>
        </Tooltip>
        <Tooltip title="Deny" placement="top">
          <Button
            className="profile-edit-button"
            size="small"
            color="secondary"
            onClick={handleDeny}
          >
            <i class="fas fa-times-circle fa-2x"></i>
          </Button>
        </Tooltip>
      </div>
    </main>
  )
}

const mapStateToProps = ({ usersReducer }) => {
  return {
    ...usersReducer,
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    { updateUser }
  )(ProfileEditModalContent)
)

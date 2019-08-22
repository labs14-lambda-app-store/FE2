import React, { useState } from "react"
import { connect } from "react-redux"
import Button from "@material-ui/core/Button"
import Tooltip from "@material-ui/core/Tooltip"
import TextField from "@material-ui/core/TextField"

const ProfileEditModalContent = ({ user, setIsOpen, isModalOpen }) => {
  const { first_name, last_name, email, pictureURL, username } = user

  return (
    <main className="profile-edit-modal-content">
      <div className="profile-edit-form">
        <TextField
          id="outlined-with-placeholder"
          margin="normal"
          variant="outlined"
          defaultValue={first_name}
          label="First Name"
        />
        <TextField
          id="outlined-with-placeholder"
          margin="normal"
          variant="outlined"
          defaultValue={last_name}
          label="Last Name"
        />
        <TextField
          id="outlined-with-placeholder"
          margin="normal"
          variant="outlined"
          defaultValue={email}
          label="Email"
        />
        <TextField
          id="outlined-with-placeholder"
          margin="normal"
          variant="outlined"
          defaultValue={username}
          label="Username"
        />
        <TextField
          id="outlined-with-placeholder"
          margin="normal"
          variant="outlined"
          defaultValue={pictureURL}
          label="Avatar URL"
        />
      </div>
      <div className="profile-edit-buttons">
        <Tooltip title="Approve" placement="top">
          <Button
            className="admin-button"
            size="small"
            color="primary"
            // onClick={handleConfirm}
          >
            <i class="fas fa-check-circle fa-lg"></i>
          </Button>
        </Tooltip>
        <Tooltip title="Deny" placement="top">
          <Button
            className="admin-button"
            size="small"
            color="secondary"
            // onClick={handleDeny}
          >
            <i class="fas fa-times-circle fa-lg"></i>
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

export default connect(
  mapStateToProps,
  {}
)(ProfileEditModalContent)

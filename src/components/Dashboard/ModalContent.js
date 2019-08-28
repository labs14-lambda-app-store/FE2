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

  function handleUpdateUser(change, id) {
    updateUser(change, id).then(res => {
      setIsOpen(!isModalOpen)
      window.location.reload()
    })
  }

  const handleChanges = e => {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value })
  }

  return (
    <main className="profile-edit-modal-content">
      <div className="profile-edit-form">
        <TextField
          className="usernameEdit"
          id="outlined-with-placeholder"
          margin="normal"
          variant="outlined"
          value={updatedUser.username}
          name="username"
          label="Username"
          onChange={e => {
            handleChanges(e)
          }}
        />
        <TextField
          className="firstNameEdit"
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
          className="lastNameEdit"
          id="outlined-with-placeholder"
          margin="normal"
          variant="outlined"
          value={updatedUser.last_name}
          name="last_name"
          label="Last Name"
          onChange={e => {
            handleChanges(e)
          }}
        />
        <TextField
          className="pronounEdit"
          id="outlined-with-placeholder"
          margin="normal"
          variant="outlined"
          // value={updatedUser.last_name}
          name="pronoun"
          label="Preferred Pronoun"
          onChange={e => {
            handleChanges(e)
          }}
        />
        <TextField
          className="dateOfBirthEdit"
          id="outlined-with-placeholder"
          margin="normal"
          variant="outlined"
          // value={updatedUser.birthday}
          name="DateOfBirth"
          label="Date of Birth"
          onChange={e => {
            handleChanges(e)
          }}
        />
        <TextField
          className="avatarURLEdit"
          id="outlined-with-placeholder"
          margin="normal"
          variant="outlined"
          // value={updatedUser.pictureURL}
          name="pictureURL"
          label="Avatar URL"
          onChange={e => {
            handleChanges(e)
          }}
        />
        <TextField
          className="githubEdit"
          id="outlined-with-placeholder"
          margin="normal"
          variant="outlined"
          // value={updatedUser.pictureURL}
          name="github"
          label="Github URL"
          onChange={e => {
            handleChanges(e)
          }}
        />
        <TextField
          className="linkedInEdit"
          id="outlined-with-placeholder"
          margin="normal"
          variant="outlined"
          // value={updatedUser.pictureURL}
          name="linkedin"
          label="LinkedIn URL"
          onChange={e => {
            handleChanges(e)
          }}
        />
      </div>
      <div className="profile-edit-buttons">
        {/* <Tooltip title="Confirm" placement="top">
          <Button
            className="profile-edit-button"
            size="small"
            color="primary"
            onClick={() => handleUpdateUser(updatedUser, id)}
          >
            <i class="fas fa-check-circle fa-2x"></i>
          </Button>
        </Tooltip>
        <Tooltip title="Back" placement="top">
          <Button
            className="profile-edit-button"
            size="small"
            color="secondary"
            onClick={() => setIsOpen(!isModalOpen)}
          >
            <i class="fas fa-times-circle fa-2x"></i>
          </Button>
        </Tooltip> */}
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

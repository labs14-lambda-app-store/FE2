import React, { useState } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

import Button from "@material-ui/core/Button"
import Tooltip from "@material-ui/core/Tooltip"
import TextField from "@material-ui/core/TextField"

import { updateUser, getUser } from "../../actions"

const ProfileEditModalContent = ({
  user,
  setIsOpen,
  isModalOpen,
  updateUser,
  getUser
}) => {
  const {
    id,
    role,
    sub_id,
    first_name,
    last_name,
    pictureURL,
    username,
    github_link,
    linkedin_link,
    preferred_pronoun,
    birthday,
  } = user

  const [updatedUser, setUpdatedUser] = useState({
    id,
    role,
    sub_id,
    first_name,
    last_name,
    pictureURL,
    username,
    github_link,
    linkedin_link,
    preferred_pronoun,
    birthday,
  })

  function handleUpdateUser(change, id) {
    updateUser(change, id).then(res => {
      setIsOpen(!isModalOpen)
    }).then(res => {
      getUser(id)
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
          value={updatedUser.preferred_pronoun}
          name="preferred_pronoun"
          label="Preferred Pronoun"
          onChange={e => {
            handleChanges(e)
          }}
        />
        <TextField
          className="birthdayEdit"
          id="date"
          margin="normal"
          variant="outlined"
          label="Birthday"
          type="date"
          name="birthday"
          defaultValue={updatedUser.birthday}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={e => {
            handleChanges(e)
          }}
        />
        <TextField
          className="avatarURLEdit"
          id="outlined-with-placeholder"
          margin="normal"
          variant="outlined"
          value={updatedUser.pictureURL}
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
          value={updatedUser.github_link}
          name="github_link"
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
          value={updatedUser.linkedin_link}
          name="linkedin_link"
          label="LinkedIn URL"
          onChange={e => {
            handleChanges(e)
          }}
        />
        <div className="profile-edit-buttons">
          <Tooltip title="Confirm" placement="top">
            <Button
              className="saveEditButton"
              size="small"
              color="primary"
              onClick={() => handleUpdateUser(updatedUser, id)}
            >
              Save
            </Button>
          </Tooltip>
          <Tooltip title="Cancel" placement="top">
            <Button
              className="cancelEditButton"
              size="small"
              color="secondary"
              onClick={() => setIsOpen(!isModalOpen)}
            >
              Cancel
            </Button>
          </Tooltip>
        </div>
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
    { updateUser, getUser }
  )(ProfileEditModalContent)
)

import React, { useState } from "react"
import { connect } from "react-redux"
import Paper from "@material-ui/core/Paper"
import Button from "@material-ui/core/Button"
import ProfileEditModal from "./ProfileEditModal"

const Profile = ({ user }) => {
  const { first_name, last_name, email, pictureURL, username } = user
  
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="profile-container">
      <Paper className="info-card">
        <div className="name-card">
          <h2>
            {first_name} {last_name}
          </h2>
          <p>{email}</p>
          <p>user dot birthday</p>
          <p>user dot time zone</p>
          <p>pronoun of preference!</p>
          <p>favorite icecream flavor</p>
        </div>
        <div className="button-card" onClick={() => setIsOpen(true)}>
          <Button
            size="small"
            color="primary"
            className="edit-profile-button"
            
          >
            edit profile
          </Button>
        </div>
      </Paper>
      <Paper className="image-card">
        <div className="image-div">
          <img src={pictureURL} className="profile-image" alt="user's face" />
        </div>
        <div className="username-div">
          <username>{username}</username>
        </div>
      </Paper>
      <ProfileEditModal
        user={user}
        isModalOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </div>
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
)(Profile)

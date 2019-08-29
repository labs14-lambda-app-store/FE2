import React, { useState } from "react"
import { connect } from "react-redux"

import Paper from "@material-ui/core/Paper"
import Button from "@material-ui/core/Button"

import ProfileEditModal from "./ProfileEditModal"

const Profile = ({ user }) => {
  const { first_name, last_name, email, pictureURL, username, preferred_pronoun, birthday, github_link, linkedin_link } = user
  console.log(user)

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="profile-container">
      <Paper className="info-card">
        <div className="name-card">
          <h2>
            {first_name} {last_name}
          </h2>
          <p><i class="fas fa-genderless" aria-hidden='true'></i>{preferred_pronoun}</p>
          <p><i class="fas fa-envelope" aria-hidden='true'></i>{email}</p>
          <p><i class="fas fa-birthday-cake" aria-hidden='true'></i>{birthday}</p>
          <a href={`${github_link}`} target='_onblank'>View GitHub</a>
          <p><i class="fab fa-github" aria-hidden='true'></i>{github_link}</p>
          <p><i class="fab fa-linkedin-in" aria-hidden='true'></i>{linkedin_link}</p>
        </div>
        <div className="button-card" onClick={() => setIsOpen(true)}>
          <Button size="small" color="primary" className="edit-profile-button">
            edit profile
          </Button>
        </div>
      </Paper>
      <Paper className="image-card">
        <div className="image-div">
          <img src={pictureURL} className="profile-image" alt="user's face" />
        </div>
        <div className="username-div">
          <p>{username}</p>
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

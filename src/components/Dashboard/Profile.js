import React, { useState } from "react"
import { connect } from "react-redux"

import Paper from "@material-ui/core/Paper"
import Button from "@material-ui/core/Button"

import ProfileEditModal from "./ProfileEditModal"

const Profile = ({ user }) => {
  const {
    first_name,
    last_name,
    email,
    pictureURL,
    username,
    preferred_pronoun,
    birthday,
    github_link,
    linkedin_link,
  } = user
  console.log(user)

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="profile-container">
      <Paper className="info-card">
        <div className="name-card">
          <h2>
            {first_name} {last_name}
          </h2>
          <p className="info-label">
            <i class="fas fa-genderless" aria-hidden="true"></i>Preferred
            Pronoun
          </p>
          <p className='info-text'>{preferred_pronoun}</p>
          <p className="info-label">
            <i class="fas fa-envelope" aria-hidden="true"></i>Email
          </p>
          <p className='info-text'>
            {email}
          </p>
          <p className="info-label">
            <i class="fas fa-birthday-cake" aria-hidden="true"></i>Birthday
          </p>
          <p className='info-text'> {birthday}</p>
          <p className="info-label">
            <i class="fab fa-github" aria-hidden="true"></i>GitHub
          </p>
          <p className='info-text'>{github_link}</p>
          <a href={`${github_link}`} target="_onblank">
          <i class="fas fa-external-link-alt"></i>View GitHub
          </a>
          <p className="info-label">
            <i class="fab fa-linkedin-in" aria-hidden="true"></i>LinkedIn
          </p>
          <p className='info-text'>{linkedin_link}</p>
          <a href={`${linkedin_link}`} target="_onblank">
          <i class="fas fa-external-link-alt"></i>View LinkedIn
          </a>
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

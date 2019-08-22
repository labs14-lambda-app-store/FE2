import React, { useState } from "react"
import { connect } from "react-redux"
import Paper from "@material-ui/core/Paper"
import Button from "@material-ui/core/Button"
import ProfileEditModal from "./ProfileEditModal"
// import editUser from '../../actions'  // doesn't yet exist

const Profile = ({ user }) => {
  const { first_name, last_name, email, pictureURL, username } = user
  
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="profileContainer">
      <Paper className="infoCard">
        <div className="nameCard">
          <h2>
            {first_name} {last_name}
          </h2>
          <p>{email}</p>
          <p>user dot birthday</p>
          <p>user dot time zone</p>
          <p>pronoun of preference!</p>
          <p>favorite icecream flavor</p>
        </div>
        <div className="buttonCard" onClick={() => setIsOpen(true)}>
          <Button
            size="small"
            color="primary"
            className="editProfileButton"
            
          >
            edit profile
          </Button>
        </div>
      </Paper>
      <Paper className="imageCard">
        <div className="imgDiv">
          <img src={pictureURL} className="profileImage" alt="user's face" />
        </div>
        <div className="usernameDiv">
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

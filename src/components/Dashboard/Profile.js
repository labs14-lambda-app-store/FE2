import React from 'react'
import { connect } from 'react-redux'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
// import editUser from '../../actions'  // doesn't yet exist


const Profile = ({ user }) => {

    const { first_name, last_name, email, pictureURL, username } = user

    return (
        <div className="profileContainer">
            <Paper className="infoCard">
                <div className="nameCard">
                    <name>{first_name} {last_name}</name>
                    <email>{email}</email>
                    <birthday>user dot birthday</birthday>
                    <timezone>user dot time zone</timezone>
                    <pronoun>pronoun of preference!</pronoun>
                </div>
                <div className="buttonCard">
                    <Button color="primary" className="editProfileButton">edit profile</Button>
                </div>
            </Paper>
            <Paper className="imageCard">
                <div className="imgDiv"><img src={pictureURL} className="profileImage" alt="user's face"/></div>
                <div className="usernameDiv"><username>{username}</username></div>
            </Paper>
        </div>
    )
}

const mapStateToProps = ({ usersReducer }) => {
    return {
        ...usersReducer
    }
}

export default connect(
    mapStateToProps,
    {}
)(Profile);
import React from 'react'
import { connect } from 'react-redux'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'


const Profile = ({ user }) => {

    

    return (
        <div className="profileContainer">
            <Paper className="infoCard">
                <div className="nameCard">
                    <name>{user.first_name} {user.last_name}</name>
                    <email>{user.email}</email>
                    <birthday>user dot birthday</birthday>
                    <timezone>user dot time zone</timezone>
                    <pronoun>pronoun of preference!</pronoun>
                </div>
                <div className="buttonCard">
                    <Button color="primary" className="editProfileButton">edit profile</Button>
                </div>
            </Paper>
            <Paper className="imageCard">
                <div className="imgDiv"><img src={user.pictureURL} className="profileImage" alt="user's face"/></div>
                <div className="usernameDiv"><username>{user.username}</username></div>
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
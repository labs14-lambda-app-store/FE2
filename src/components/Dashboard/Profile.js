import React from 'react';



const Profile = ({ user }) => {
    return (
        <div className="profileContainer">
            <div className="infoCard">
                <div className="infoCard">
                    <name>First & Last</name>
                    <email>email@email.com</email>
                    <pronoun>of preference!</pronoun>
                </div>
                <div className="buttonCard">
                    <button className="editProfileButton">edit</button>
                </div>
            </div>
            <div className="imageCard">
                <image></image>
                <username></username>
            </div>
        </div>
    )
}


export default Profile;
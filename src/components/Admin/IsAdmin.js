import React, { useState, useEffect } from "react"
import Button from "@material-ui/core/Button"
import { connect } from "react-redux"
import { loginUser } from "../../actions"

const IsAdmin = props => {
    const {
        loginUser,
        user,
    } = props

    // console.log("PROPS YO", props)
    // console.log("REDUCER YO", loginUser)
    // console.log("USER YO", user)
    // console.log("USER ROLE YO", user)
    // const IsAdmin = user.role;

    useEffect(() => {

        //eslint-disable-next-line
    }, [])

    return (
        <div>
            { user ? <Button onClick={() => props.history.push("/pending-projects")}>
                Pending Projects
            </Button>
            : <Button onClick={() => props.history.push("/project-form")}>
                Submit Project
            </Button>
            }
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
    { loginUser }
)(IsAdmin)

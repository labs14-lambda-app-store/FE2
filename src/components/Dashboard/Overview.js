import React from 'react'
import useStyles from "./styles"
import clsx from 'clsx'
import { connect } from "react-redux"

const Overview = ({ user }) => {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    return (
        <>
            <h1>Overview</h1>
        </>
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
)(Overview)
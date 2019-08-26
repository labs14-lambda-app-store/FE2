import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";

import Paper from '@material-ui/core/Paper';


import useStyles from "./styles";
import clsx from 'clsx';

const MyAppsView = ({ user }) => {
    const classes = useStyles();
    const fixedAppsHeightPaper = clsx(classes.paper, classes.fixedAppHeight);
    const [isOpen, setIsOpen] = useState(false)
    const [approvedApps, setApprovedApps] = useState("")
    const [unapprovedApps, setUnapprovedApps] = useState("")

    useEffect(() => {
        setApprovedApps(user.apps.filter(app => app.is_approved))
        setUnapprovedApps(user.apps.filter(app => app.is_approved === false))
    }, [])

    const checkArrayLength = array => {
        if(array.length > 0){
            return <div onClick={() => setIsOpen(true)} style={{ display: "flex", flexDirection: "column" }}>
            {array.name}
            <img src={array.display_image} style={{ width: 500, height: "auto" }} />
        </div>
        } 
        return <p>no apps to show</p>
    }


    return (
        <main className="my-apps-container">
            <Paper className="unapproved-apps-card">
            <h2>Unapproved Apps</h2>
                {checkArrayLength(unapprovedApps) }
            </Paper>
            <Paper className="approved-apps-card">
                <h2>Approved Apps</h2>
                {checkArrayLength(approvedApps)}
            </Paper>
        </main>
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
)(MyAppsView)
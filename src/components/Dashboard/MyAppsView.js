import React, { useState } from 'react';
import { connect } from "react-redux";

import Paper from '@material-ui/core/Paper';
import AppContent from './AppContent'

import useStyles from "./styles";
import clsx from 'clsx';

const MyAppsView = ({ user }) => {
    const classes = useStyles();
    const fixedAppsHeightPaper = clsx(classes.paper, classes.fixedAppHeight);
    const [isOpen, setIsOpen] = useState(false)
    const approvedApps = user.apps.filter(app => app.is_approved);
    const unapprovedApps = user.apps.filter(app => app.is_approved === false);

    return (
        <main className="my-apps-container">
            <Paper className="unapproved-apps-card">
                <h2>Pending Apps</h2>
                {unapprovedApps.map(app => (
                    <div onClick={() => setIsOpen(true)} style={{ display: "flex", flexDirection: "column" }}>
                        {app.name}
                        <img src={app.display_image} style={{ width: 500, height: "auto" }} />
                    </div>
                ))}
            </Paper>
            <Paper className="approved-apps-card">
                <h2>Approved Apps</h2>
                {approvedApps.map(app => (
                    <div onClick={() => setIsOpen(true)} style={{ display: "flex", flexDirection: "column" }}>
                        {app.name}
                        <img src={app.display_image} style={{ width: 500, height: "auto" }} />
                    </div>
                ))}
            </Paper>
            <AppContent isModalOpen={isOpen} setIsOpen={setIsOpen} />
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
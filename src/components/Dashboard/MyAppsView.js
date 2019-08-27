import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import useStyles from "./styles";
import clsx from 'clsx';
import { connect } from "react-redux";

const MyAppsView = ({ user }) => {
    const classes = useStyles();
    const fixedAppsHeightPaper = clsx(classes.paper, classes.fixedAppHeight);

    const approvedApps = user.apps.filter(app => app.is_approved);
    const unapprovedApps = user.apps.filter(app => app.is_approved === false);

    return (
        <>
            <h2>Pending Apps</h2>
            {unapprovedApps.map(app => (
                <div style={{ display: "flex", flexDirection: "column" }}>
                    {app.name}
                    <img src={app.display_image} style={{ width: 500, height: "auto" }} />
                </div>
            ))}
            <h2>Approved Apps</h2>
            {approvedApps.map(app => (
                <div style={{ display: "flex", flexDirection: "column" }}>
                    {app.name}
                    <img src={app.display_image} style={{ width: 500, height: "auto" }} />
                </div>
            ))}
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
)(MyAppsView)
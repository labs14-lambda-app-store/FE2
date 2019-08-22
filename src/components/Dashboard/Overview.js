import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import useStyles from "./styles";
import clsx from 'clsx';
import { connect } from "react-redux";

const Overview = ({ user, app }) => {
    // const { display_image, name, description, category, is_approved } = app
    console.log('user', user)
    console.log('user apps is approved', user.apps[0].is_approved)
    const approvedApps = user.apps.filter(app => app.is_approved);
    console.log("approved yo", approvedApps);
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        
        <>
            <h1>Overview</h1>
            
            <Grid container spacing={3}>
                <Grid item xs={12} md={8} lg={9}>
                    Your Approved Apps
                    {approvedApps.map(app => (
                    <Paper className={fixedHeightPaper}>
                        <h1>{app.name}</h1>
                    </Paper>))}
                    
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                    <Paper className={fixedHeightPaper}>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                    </Paper>
                </Grid>
            </Grid>
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
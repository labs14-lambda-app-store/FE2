import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import useStyles from "./styles";
import clsx from 'clsx';
import { connect } from "react-redux";

const Overview = ({ user }) => {
    console.log('user', user)
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    return (
        <>
            <h1>Overview</h1>
            <Grid container spacing={3}>
                <Grid item xs={12} md={8} lg={9}>
                    Your Approved Apps
                    {user ? (
                        user.apps.is_approved === true ? (
                            <Paper className={fixedHeightPaper}>
                                {user.apps}
                            </Paper>
                        ) : (
                                <h1>Hi</h1>
                            )
                    ) : <h1> nothing here</h1>}
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
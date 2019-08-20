import React from 'react';
import { withRouter } from 'react-router'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import AddBoxIcon from '@material-ui/icons/AddBox';

const SecondaryItemList = ({ history }) => {
    return (
        <div>
            <ListItem button onClick={() => history.push("/")} >
                <ListItemIcon>
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Return to Home" />
            </ListItem>
            <ListItem button onClick={() => history.push("/app-form")} >
                <ListItemIcon>
                    <AddBoxIcon />
                </ListItemIcon>
                <ListItemText primary="Submit an App" />
            </ListItem>
        </div>
    )
}

export default withRouter(SecondaryItemList)
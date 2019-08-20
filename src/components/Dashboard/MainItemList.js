import React from 'react';
import { withRouter } from 'react-router';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const MainItemList = ({ history }) => {
    return (
        <div>
            <ListItem button onClick={() => history.push("/dashboard")} >
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Overview" />
            </ListItem>
            <ListItem button onClick={() => history.push("/profile")} >
                <ListItemIcon>
                    <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="My Profile" />
            </ListItem>
            <ListItem button onClick={() => history.push("/approved-apps")} >
                <ListItemIcon>
                    <CheckBoxIcon />
                </ListItemIcon>
                <ListItemText primary="My Approved Apps" />
            </ListItem>
            <ListItem button onClick={() => history.push("/user-settings")} >
                <ListItemIcon>
                    <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Settings" />
            </ListItem>
        </div>
    )
}

export default withRouter(MainItemList)
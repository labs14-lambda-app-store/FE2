import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

export const mainListItems = (
    <div>
        <ListItem button >
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Overview" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="My Profile" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <CheckBoxIcon />
            </ListItemIcon>
            <ListItemText primary="My Approved Apps" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
        </ListItem>
    </div>
)

export const secondaryListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Return to Home" />
        </ListItem>
    </div>
)

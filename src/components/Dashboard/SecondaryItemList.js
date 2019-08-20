import React from 'react';
import { withRouter } from 'react-router'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import AddBoxIcon from '@material-ui/icons/AddBox';

const SecondaryItemList = () => {
    return (
        <div>
            <ListItem button>
                <ListItemIcon>
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Return to Home" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <AddBoxIcon />
                </ListItemIcon>
                <ListItemText primary="Submit an App" />
            </ListItem>
        </div>
    )
}

export default withRouter(SecondaryItemList)
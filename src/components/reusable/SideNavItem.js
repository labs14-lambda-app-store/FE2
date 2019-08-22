import React from 'react';
import { withRouter } from 'react-router'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// route = string | icon = function that returns a Material UI Icon (component)
// primaryText = The text of the icon button

const SideNavItem = ({ route, icon: Icon, primaryText, history }) => {
    return (
        <>
            <ListItem button onClick={() => history.push(route)} >
                <ListItemIcon>
                    <Icon />
                </ListItemIcon>
                <ListItemText primary={primaryText} />
            </ListItem>
        </>
    )
}


export default withRouter(SideNavItem)
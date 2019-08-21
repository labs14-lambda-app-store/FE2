import React from 'react';
import { withRouter } from 'react-router'
import SideNavItem from '../reusable/SideNavItem';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';

const SecondaryItemList = () => {
    return (
        <div>
            <SideNavItem route="/dashboard/settings" icon={() => <SettingsIcon />} primaryText="Settings" />
            <SideNavItem route="/" icon={() => <HomeIcon />} primaryText="Return to Home" />
        </div>
    )
}

export default withRouter(SecondaryItemList)
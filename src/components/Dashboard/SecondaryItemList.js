import React from 'react';
import { withRouter } from 'react-router'
import SideNavItem from '../reusable/SideNavItem';
import HomeIcon from '@material-ui/icons/Home';
import AddBoxIcon from '@material-ui/icons/AddBox';

const SecondaryItemList = () => {
    return (
        <div>
            <SideNavItem route="/dashboard/submit-app" icon={() => <AddBoxIcon />} primaryText="Submit an App"/>
            <SideNavItem route="/" icon={() => <HomeIcon />} primaryText="Return to Home" />
        </div>
    )
}

export default withRouter(SecondaryItemList)
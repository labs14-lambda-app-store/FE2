import React from 'react';
import { withRouter } from 'react-router';
import SideNavItem from '../reusable/SideNavItem';
import PersonIcon from '@material-ui/icons/Person';

import CategoryIcon from '@material-ui/icons/Category';

const MainItemList = () => {
    return (
        <div>
            <SideNavItem route="/dashboard/apps" icon={() => <CategoryIcon />} primaryText="My Apps" />
            <SideNavItem route="/dashboard/profile" icon={() => <PersonIcon />} primaryText="My Profile" />
        </div>
    )
}

export default withRouter(MainItemList)
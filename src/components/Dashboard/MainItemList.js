import React from 'react';
import { withRouter } from 'react-router';
import SideNavItem from '../reusable/SideNavItem';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';
import AddBoxIcon from '@material-ui/icons/AddBox';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const MainItemList = () => {
    return (
        <div>
            <SideNavItem route="/dashboard" icon={() => <DashboardIcon />} primaryText="Overview" />
            <SideNavItem route="/dashboard/approved-apps" icon={() => <CheckBoxIcon />} primaryText="My Approved Apps" />
            <SideNavItem route="/dashboard/submit-app" icon={() => <AddBoxIcon />} primaryText="Submit an App" />
            <SideNavItem route="/dashboard/profile" icon={() => <PersonIcon />} primaryText="My Profile" />
        </div>
    )
}

export default withRouter(MainItemList)
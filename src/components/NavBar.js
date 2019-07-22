import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import { MemoryRouter as Router } from 'react-router-dom';
import { BrowserRouter as Route, Link, withRouter } from "react-router-dom";

// I've imported Material UI packages above,
// and implemented them in a functional component below
const NavBar = (props) => {

    return (
        <Router>
            <div>
                <AppBar position="static">
                    <Toolbar>
                        {/* Using button onClick to avoid Link bug that prevents route changes,
                        when using material-ui */}
                        <Button onClick={() => props.history.push('/')}>Home</Button>
                        <Button onClick={() => props.history.push('/projects')}>Projects</Button>
                        <Button onClick={() => props.history.push('/project-form')}>Submit Project</Button>
                    </Toolbar>
                </AppBar>
            </div>
        </Router>
    )
}

export default withRouter(NavBar);

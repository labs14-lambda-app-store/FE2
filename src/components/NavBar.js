import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import { MemoryRouter as Router } from 'react-router-dom';
import { BrowserRouter as Route, Link, withRouter } from "react-router-dom";

// I've imported Material UI packages above, 
// and set them in a functional component below
const NavBar = (props) => {

    return (
        <Router>
            <div>
                {console.log(props)}
                <AppBar position="static">
                    <Toolbar>
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
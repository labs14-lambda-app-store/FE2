import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"
import { AuthButton } from "./Auth"
// import Typography from '@material-ui/core/Typography';
import { MemoryRouter as Router, withRouter } from "react-router-dom"
import redLambdaLogo from "../assets/Lambda_Logo.png"

// I've imported Material UI packages above,
// and implemented them in a functional component below
const NavBar = props => {

  return (
    <Router>
      <div>
        <AppBar position="static">
          <Toolbar>
           
              <img 
                className="Header-lambda-logo"
                src={redLambdaLogo}
                alt="red lambda logo"
                onClick={() => props.history.push("/")}
              />
            
            {/* Using button onClick to avoid Link bug that prevents route changes,
                        when using material-ui */}
            <div className="buttons">
              
              <Button onClick={() => props.history.push("/")}>Home</Button>
              <Button onClick={() => props.history.push("/projects")}>
                Projects
              </Button>
              <Button onClick={() => props.history.push("/project-form")}>
                Submit Project
              </Button>
              <AuthButton />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </Router>
  )
}

export default withRouter(NavBar)

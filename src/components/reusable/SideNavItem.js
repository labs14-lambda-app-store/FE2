import React from "react"
import Cookie from "js-cookie"
import { withRouter } from "react-router"

import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"

import { useAuth0 } from "../Auth/react-auth0-spa.js"

// route = string | icon = function that returns a Material UI Icon (component)
// primaryText = The text of the icon button

const SideNavItem = ({
  route,
  icon: Icon,
  primaryText,
  history,
  isAuthButton,
}) => {
  const { logout } = useAuth0()

  const logoutWithRedirect = () => {
    Cookie.remove("user_id")
    logout({
      returnTo: window.location.origin,
    })
  }

  return (
    <>
      <ListItem
        button
        onClick={() =>
          isAuthButton ? logoutWithRedirect() : history.push(route)
        }
        //if pathname is the same as the route, display lambda light blue color, else black
        style={{
          color: window.location.pathname === route ? "#3ab5e5" : "black",
        }}
      >
        <ListItemIcon
          style={{
            color: window.location.pathname === route ? "#3ab5e5" : "black",
          }}
        >
          <Icon />
        </ListItemIcon>
        <ListItemText primary={primaryText} />
      </ListItem>
    </>
  )
}

export default withRouter(SideNavItem)

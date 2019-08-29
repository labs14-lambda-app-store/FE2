import React from "react"
import { connect } from "react-redux"
import { Switch, Route } from "react-router-dom"

import List from "@material-ui/core/List"
import Drawer from "@material-ui/core/Drawer"
import AppBar from "@material-ui/core/AppBar"
import MenuIcon from "@material-ui/icons/Menu"
import Toolbar from "@material-ui/core/Toolbar"
import Divider from "@material-ui/core/Divider"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import CssBaseline from "@material-ui/core/CssBaseline"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"

import clsx from "clsx"
import Profile from "./Profile"
import useStyles from "./styles"
import MyAppsView from "./MyAppsView"
import NotFound from "../404/NotFound"
import MainItemList from "./MainItemList"
import AppForm from "../SubmissionForm/AppForm"
import SecondaryItemList from "./SecondaryItemList"
import ProtectedRoute from "../Auth/ProtectedRoute"

const Dashboard = ({ user }) => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(true)
  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h4"
            noWrap
            className={classes.title}
          >
            {user.first_name ? `${user.first_name}'s` : "User"} Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />

        <List className={classes.list}>
          <MainItemList />
        </List>
        <Divider />
        <List className={classes.list}>
          <SecondaryItemList />
        </List>
      </Drawer>

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Switch>
            <ProtectedRoute
              exact
              path="/dashboard/profile"
              component={Profile}
            />
            <ProtectedRoute
              exact
              path="/dashboard/apps"
              component={MyAppsView}
            />
            <ProtectedRoute
              exact
              path="/dashboard/submit-app"
              component={AppForm}
            />
            <Route path="/dashboard/*" component={NotFound} />
          </Switch>
        </Container>
      </main>
    </div>
  )
}

const mapStateToProps = ({ usersReducer }) => {
  return {
    ...usersReducer,
  }
}

export default connect(
  mapStateToProps,
  {}
)(Dashboard)

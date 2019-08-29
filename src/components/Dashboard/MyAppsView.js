import React, { useState, useEffect } from "react"
import { connect } from "react-redux"

import Paper from "@material-ui/core/Paper"

import MyAppItem from "./MyAppItem"

const MyAppsView = ({ user }) => {
  const [approvedApps, setApprovedApps] = useState("")
  const [unapprovedApps, setUnapprovedApps] = useState("")

  useEffect(() => {
    setApprovedApps(user.apps ? user.apps.filter(app => app.is_approved) : "")
    setUnapprovedApps(
      user.apps ? user.apps.filter(app => app.is_approved === false) : ""
    )
  }, [user])

  const mapApps = array => {
    if (array.length > 0) {
      return array.map(currentApp => <MyAppItem currentApp={currentApp} />)
    } else {
      return <p className="no-show-message">nothing to see here</p>
    }
  }

  return (
    <main className="my-apps-container">
      <Paper className="unapproved-apps-card">
        <h2>Unapproved Apps</h2>
        <hr />
        {mapApps(unapprovedApps)}
      </Paper>
      <Paper className="approved-apps-card">
        <h2>Approved Apps</h2>
        <hr />
        {mapApps(approvedApps)}
      </Paper>
    </main>
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
)(MyAppsView)

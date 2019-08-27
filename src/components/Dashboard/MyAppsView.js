import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import MapIfGreaterThanZero from '../reusable/MapIfGreaterThanZero'
import MyAppItem from "./MyAppItem"
import Paper from "@material-ui/core/Paper"
// import AppContentModal from './AppContent'

const MyAppsView = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [approvedApps, setApprovedApps] = useState("")
  const [unapprovedApps, setUnapprovedApps] = useState("")

  useEffect(() => {
    setApprovedApps(user.apps.filter(app => app.is_approved))
    setUnapprovedApps(user.apps.filter(app => app.is_approved === false))
  }, [])

  return (
    <main className="my-apps-container">
      <Paper className="unapproved-apps-card">
        <h2>Unapproved Apps</h2>
        <hr />
        {<MapIfGreaterThanZero array={unapprovedApps} component={() => 
            <MyAppItem test="yourmom"/>
        } setIsOpen={setIsOpen} />}
      </Paper>
      <Paper className="approved-apps-card">
        <h2>Approved Apps</h2>
        <hr />
        {<MapIfGreaterThanZero array={approvedApps} component={() => 
            <MyAppItem test="yourmom"/>
        } setIsOpen={setIsOpen} />}
      </Paper>
      {/* <AppContentModal user={user} isModalOpen={isOpen} setIsOpen={setIsOpen} /> */}
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

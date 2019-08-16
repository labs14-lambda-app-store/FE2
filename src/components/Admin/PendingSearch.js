import React, { useState, useEffect } from "react"
import Pagination from "material-ui-flat-pagination"
import TextField from "@material-ui/core/TextField"
import AppsGallery from "../AppCard/AppsGallery"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import { connect } from "react-redux"

import { App } from "../AppCard"
import { getPendingApps, searchApps } from "../../actions"

const PendingSearch = props => {
  return <AppsGallery appType="pending" />
}

const mapStateToProps = ({ appsReducer, usersReducer }) => {
  return {
    ...appsReducer,
    ...usersReducer,
  }
}
export default connect(
  mapStateToProps,
  { getPendingApps, searchApps }
)(PendingSearch)

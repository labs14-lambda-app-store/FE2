import React, { useState, useEffect } from "react"
import Pagination from "material-ui-flat-pagination"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import AppsGallery from "./AppsGallery"
import Grid from "@material-ui/core/Grid"
import { connect } from "react-redux"

const AppSearch = props => {
  const [searchString, setSearchString] = useState("")
  const {
    getApprovedApps,
    apps,
    approvedAppsLength,
    getPendingApps,
    appType,
  } = props
  const [offset, setOffset] = useState(0)

  return <AppsGallery />
}

export default AppSearch

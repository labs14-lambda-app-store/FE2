import React, { useState, useEffect } from "react"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import PaginationConfig from "./PaginationConfig"
import { connect } from "react-redux"
import Loader from "react-loader-spinner"

import App from "./App.js"
import { getApprovedApps, getPendingApps, searchApps } from "../../actions"

const AppsGallery = ({
  getApprovedApps,
  apps,
  searchApps,
  approvedAppsLength,
  getPendingApps,
  pendingAppsLength,
  appType,
  isLoadingApps,
}) => {
  const [searchString, setSearchString] = useState("")

  const [offset, setOffset] = useState(0)

  const appsLength =
    appType === "pending"
      ? Math.ceil(pendingAppsLength / 12)
      : Math.ceil(approvedAppsLength / 12)

  //searches for searchString if searchString, else gets projects
  useEffect(() => {
    if (searchString) {
      handleSearch(setOffset(0), searchString)
    } else {
      checkAppType()
    }

    //eslint-disable-next-line
  }, [approvedAppsLength, pendingAppsLength])

  //gets apps when search bar is cleared
  useEffect(() => {
    if (searchString.length === 0) checkAppType()
    //eslint-disable-next-line
  }, [getApprovedApps, getPendingApps, searchString])

  //checks the appType prop and triggers relevant redux action
  const checkAppType = page => {
    //switch statement allows for further search cases in case of further gallery types
    switch (appType) {
      case "pending":
        getPendingApps(page || 1)
        break
      //by default get only approved apps
      default:
        getApprovedApps(page || 1)
    }
  }

  const handleSearch = (offset, searchString) => {
    switch (appType) {
      case "pending":
        searchApps(offset, searchString, false)
        break
      //by default get only approved apps
      default:
        searchApps(offset, searchString, true)
    }
  }

  return (
    <div>
      <div className="actionNav">
        <div className="searchNav">
          <TextField
            value={searchString}
            variant="outlined"
            name="searchString"
            style={{ padding: 24, marginTop: 28 }}
            id="searchInput"
            //eslint-disable-next-line
            type="search"
            placeholder="Find app by name or keyword"
            margin="normal"
            onChange={e => {
              setSearchString(e.target.value)
            }}
            //added on key press for enter and then e.which for return
            onKeyPress={e => {
              if (e.key === "Enter" || e.which === 13) {
                handleSearch(1, searchString)
              }
            }}
          />
          <Button
            label="Search"
            variant="contained"
            type="submit"
            color="primary"
            disabled={!searchString && true}
            onClick={e => handleSearch(1, searchString)}
          >
            Search
          </Button>
        </div>
        {/* pagination for top of page */}
        <PaginationConfig
          offset={offset}
          setOffset={setOffset}
          appsLength={appsLength}
          searchString={searchString}
          checkAppType={checkAppType}
        />
      </div>
      {console.log(isLoadingApps)}

      {/* if apps.length is equal to 0, search error text appears alerting the user there are no results for the query */}
      {isLoadingApps ? (
        <Loader type="ThreeDots" height={80} width={80} />
      ) : apps.length === 0 && searchString ? (
        <div className="invalid-search">
          <i className="fas fa-search"></i>
          <p className="invalid-text">
            There are no apps matching this search.
          </p>
        </div>
      ) : (
        <Grid container spacing={2} style={{ padding: 24 }}>
          {apps.map(currentApp => (
            <Grid key={currentApp.id} item xs={12} sm={6} lg={4} xl={3}>
              <App app={currentApp} key={currentApp.id} />
            </Grid>
          ))}
        </Grid>
      )}

      {/* pagination for bottom of page */}
      <PaginationConfig
        offset={offset}
        setOffset={setOffset}
        appsLength={appsLength}
        searchString={searchString}
        checkAppType={checkAppType}
      />
    </div>
  )
}

const mapStateToProps = ({ appsReducer, usersReducer }) => {
  return {
    ...appsReducer,
    ...usersReducer,
    isLoadingApps: appsReducer.isFetching
  }
}
export default connect(
  mapStateToProps,
  { getApprovedApps, searchApps, getPendingApps }
)(AppsGallery)

import React, { useState, useEffect } from "react"
import Pagination from "material-ui-flat-pagination"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import { connect } from "react-redux"

import { App } from "../AppCard"
import { getPendingApps, searchApps } from "../../actions"

const PendingSearch = props => {
  const [searchString, setSearchString] = useState("")
  const {
    getPendingApps,
    apps,
    searchApps,
    pendingAppsLength,
  } = props
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    if (searchString) {
      handleSearch(null, setOffset(0), searchString)
    } else {
      getPendingApps(1)
    }
    //eslint-disable-next-line
  }, [pendingAppsLength])

  useEffect(() => {
    if (searchString.length === 0) getPendingApps(1)
  }, [getPendingApps, searchString])

  const handleSearch = (e, offset, searchString) => {
    if (e) e.preventDefault()
    searchApps(offset, searchString, false)
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
                handleSearch(e, 1, searchString)
              }
            }}
          />
          <Button
            label="Search"
            variant="contained"
            type="submit"
            color="primary"
            style={
              !searchString
                ? { background: "#c4c4c4" }
                : { background: "#1a61b0" }
            }
            disabled={!searchString ? true : false}
            onClick={e => handleSearch(e, 1, searchString)}
          >
            Search
          </Button>
        </div>
        <Pagination
          // limit of 1 array per page (in this case, one array of 12 apps being sent from the BE)
          limit={1}
          innerButtonCount={0}
          outerButtonCount={1}
          reduced={true}
          offset={offset}
          // total number of pages we want to render; dynamic by rounding up quotient of appLength and apps per page (12)
          total={Math.ceil(pendingAppsLength / 12)}
          onClick={(e, offset) => {
            setOffset(offset)
            // send the correct page query (i.e. /api/apps?page=2)
            if (searchString) {
              searchApps(offset + 1, searchString, false)
            } else {
              getPendingApps(offset + 1)
            }
          }}
        />
      </div>
      <Grid container spacing={2} style={{ padding: 24 }}>
        {apps &&
          apps.map(currentApp => (
            <Grid key={currentApp.id} item xs={12} sm={6} lg={4} xl={3}>
              <App app={currentApp} key={currentApp.id} />
            </Grid>
          ))}
      </Grid>
      <Pagination
        // limit of 1 array per page (in this case, one array of 12 apps being sent from the BE)
        limit={1}
        innerButtonCount={0}
        outerButtonCount={1}
        reduced={true}
        offset={offset}
        // total number of pages we want to render; dynamic by rounding up quotient of appLength and apps per page (12)
        total={Math.ceil(pendingAppsLength / 12)}
        onClick={(e, offset) => {
          setOffset(offset)
          // send the correct page query (i.e. /api/apps?page=2)
          if (searchString) {
            searchApps(offset + 1, searchString, false)
          } else {
            getPendingApps(offset + 1)
          }
        }}
      />
    </div>
  )
}

const mapStateToProps = ({ appsReducer, usersReducer }) => {
  return {
    ...appsReducer,
    ...usersReducer
  }
}
export default connect(
  mapStateToProps,
  { getPendingApps, searchApps,  }
)(PendingSearch)

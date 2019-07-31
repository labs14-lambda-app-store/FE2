import React, { useState, useEffect } from "react"
import Pagination from "material-ui-flat-pagination"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import { connect } from "react-redux"

import Project from "./Project.js"
import { getProjects, searchProjects } from "../actions"

const ProjectSearch = props => {
  const [searchString, setSearchString] = useState("")
  const { getProjects, projects, searchProjects, projectLength } = props
  const [offset, setOffset] = useState(0)

  useEffect(() => {
      if(searchString) {
        handleSearch(null, 1, searchString)
      } else {
        getProjects(1)
      }
    //eslint-disable-next-line
  }, [])

  const handleSearch = (e, offset, searchString) => {
      e.preventDefault()
      searchProjects(offset, searchString )
  }

  return (
    <div>
      <div className="actionNav">
        <TextField
          value={searchString}
          name="searchString"
          style={{ padding: 24 }}
          id="searchInput"
          //eslint-disable-next-line
          type="search"
          placeholder="search for..."
          margin="normal"
          onChange={e => setSearchString(e.target.value)}
        />
        <Button
          label="Search"
          type="submit"
          color="primary"
          onClick={e => handleSearch(e, 1, searchString)}>
            Search
        </Button>
        <Pagination    

        // limit of 1 array per page (in this case, one array of 12 projects being sent from the BE)
          limit={1}
          innerButtonCount={0}
          outerButtonCount={1}
          reduced={true}
          offset={offset}
          // total number of pages we want to render; dynamic by rounding up quotient of projectLength and projects per page (12)
          total={Math.ceil(projectLength/12)}
          onClick={(e, offset) => {
            setOffset(offset)
            // send the correct page query (i.e. /api/projects?page=2)
            if(searchString) {
              searchProjects(offset + 1, searchString)
            } else {
              getProjects(offset + 1)
            }  
          }}
        />
      </div>
      <Grid container spacing={2} style={{ padding: 24 }}>
        {projects.map(currentProject => (
          <Grid key={currentProject.id} item xs={12} sm={6} lg={4} xl={3}>
            <Project
              project={currentProject}
              // randomUnsplashImage={randomUnsplashImage}
              key={currentProject.id}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

const mapStateToProps = ({ projectsReducer }) => {
  return {
    ...projectsReducer,
  }
}
export default connect(
  mapStateToProps,
  { getProjects, searchProjects }
)(ProjectSearch)

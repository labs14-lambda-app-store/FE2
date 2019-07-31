import React, { useState, useEffect } from "react"
import Pagination from "material-ui-flat-pagination"
import TextField from "@material-ui/core/TextField"
import Grid from "@material-ui/core/Grid"
import { connect } from "react-redux"
import axios from "axios"

import Project from "./Project.js"
import { getProjects, searchProjects } from "../actions"

const ProjectSearch = props => {
  const [searchString, setSearchString] = useState("")
  const { getProjects, projects, projectLength } = props
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    getProjects(1)
    //eslint-disable-next-line
  }, [])

  const handleChange = e => {
     setSearchString(e.target.value)
  }

  const handleSearch = (searchString) => {
      searchProjects(1, searchString )
      console.log("searchString")


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
          onChange={e => handleChange(e)}
          onSubmit={searchString => handleSearch(searchString)}
        />
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
            getProjects(offset + 1)
           }  }
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
  { getProjects }
)(ProjectSearch)

import React, { useState, useEffect } from "react"
import Pagination from "material-ui-flat-pagination"
import TextField from "@material-ui/core/TextField"
import Grid from "@material-ui/core/Grid"
import { connect } from "react-redux"
import axios from "axios"

import Project from "./Project.js"
import { getProjects } from "../actions"

const ProjectSearch = props => {
  const [searchString, setSearchString] = useState("")
  const { getProjects, projects } = props
  const [offset, setOffset] = useState("")

  useEffect(() => {
    getProjects()
    //eslint-disable-next-line
  }, [])

  const updateSearch = e => {
    setSearchString(e.target.value.substr(0, 20))
  }

  const filteredProjects =
    projects &&
    projects.filter(project => {
      return (
        project.name.toLowerCase().indexOf(searchString) !== -1 ||
        project.description.toLowerCase().indexOf(searchString) !== -1
      )
    })

  const randomUnsplashImage = async () => {
    const image = await axios.get(
      "https://source.unsplash.com/1600x900/?nature,water,animal"
    )

    return image
  }
  return (
    <div>
      <div className="actionNav">
        <TextField
          style={{ padding: 24 }}
          id="searchInput"
          //eslint-disable-next-line
          type="search"
          placeholder="search for..."
          margin="normal"
          onChange={e => updateSearch(e)}
        />
        <Pagination    // still don't know how to plug this in to back end page numbers
          limit={12}
          offset={offset}
          total={projects.length}
          onClick={(e, offset) => setOffset(offset) }  
        />
      </div>
      <Grid container spacing={2} style={{ padding: 24 }}>
        {filteredProjects.map(currentProject => (
          <Grid key={currentProject.id} item xs={12} sm={6} lg={4} xl={3}>
            <Project
              project={currentProject}
              randomUnsplashImage={randomUnsplashImage}
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

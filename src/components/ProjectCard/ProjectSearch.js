import React, { useState, useEffect } from "react"
import Pagination from "material-ui-flat-pagination"
import TextField from "@material-ui/core/TextField"
import Grid from "@material-ui/core/Grid"
import { connect } from "react-redux"
import axios from "axios"

import Project from "./Project.js"
import { getProjects } from "../../actions"

const ProjectSearch = props => {
  const [searchString, setSearchString] = useState("")
  const { getProjects, projects, projectLength } = props
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    getProjects(1)
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
        <Pagination // still don't know how to plug this in to back end page numbers
          // limit of 1 array per page (in this case, one array of 12 projects being sent from the BE)
          limit={1}
          innerButtonCount={0}
          outerButtonCount={1}
          reduced={true}
          offset={offset}
          // total number of pages we want to render; dynamic by rounding up quotient of projectLength and projects per page (12)
          total={Math.ceil(projectLength / 12)}
          onClick={(e, offset) => {
            setOffset(offset)
            // send the correct page query (i.e. /api/projects?page=2)
            getProjects(offset + 1)
          }}
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

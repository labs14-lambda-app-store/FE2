import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import axios from "axios"

import Pagination from "material-ui-flat-pagination"
import TextField from "@material-ui/core/TextField"
import Grid from "@material-ui/core/Grid"

import Project from "./Project.js"
import { getProjects } from "../actions"

const ProjectSearch = props => {
  const [searchString, setSearchString] = useState("")
  const { getProjects, projects } = props
  const [offset, setOffset] = useState(0)
  // const [rowsPerPage, setRowsPerPage] = useState([4,8,12])
  // const [rows, setRows ] = useState([])
  // const [numberOfRows, setNumberOfRows] = useState(4)
  const [page, setPage ] = useState(1)
  // const [total, setTotal ] = useState(undefined)

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

  const offsetSet = () => {
    setOffset(offset)
    setPage(page + 1)
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
        <Pagination 
          limit={3}
          offset={offset}
          total={projects.length}
          onClick={(e, offset) => offsetSet(offset)}
        />
      </div>

      <Grid container spacing={2} style={{ padding: 24 }} >
        {/* <Pagination
          limit={1}
          offset={offset}
          total={20}
          onClick={(e, offset) => offsetSet(offset).setPage(page)}
        /> */}
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

import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Project from './Project.js'
import { connect } from 'react-redux'
import { getProjects } from '../actions'

const ProjectSearch = props => {
      const [ searchString, setSearchString ] = useState('');
      const { getProjects, projects } = props

      useEffect(() => {
        getProjects()
        //eslint-disable-next-line
      }, [ ])

      const updateSearch = e => {
            setSearchString(e.target.value.substr(0, 20));
      }

      const filteredProjects = projects && projects.filter((project) =>
        {
          return project.name.toLowerCase().indexOf(searchString) !== -1 || project.description.toLowerCase().indexOf(searchString) !== -1;
        }
      )

      return (
            <div>
                  <TextField style={{padding: 24}}
                        id='searchInput'
                        //eslint-disable-next-line
                        type="search"
                        placeholder="search for..."
                        margin="normal"
                        onChange={e => updateSearch(e)} />
                  <Grid container spacing={2} style={{padding: 24}}>
                        { filteredProjects.map(currentProject => (
                              <Grid key={currentProject.id} item xs={12} sm={6} lg={4} xl={3}>
                                    <Project project={currentProject} key={currentProject.id} />
                              </Grid>
                        ))}
                  </Grid>
            </div>
      )

}


const mapStateToProps = ({ projectsReducer }) => {
  return ({
    ...projectsReducer
  })
}
export default connect(mapStateToProps, { getProjects })(ProjectSearch);

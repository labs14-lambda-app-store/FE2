import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
// import * as contentful from 'contentful';
import Grid from '@material-ui/core/Grid';
import Project from './Project.js'


const ProjectSearch = props => {
      const [ projects, setProjects ] = useState('');
      const [ searchString, setSearchString ] = useState('');

      useEffect(() => {
            axios.get('https://lambdaappstore2.herokuapp.com/api/projects')
            .then((res) => {
                  setProjects(res.data)
                  // console.log("projects.", res.data)
            })
            .catch((err) => {
                  console.log("Error occured while fetching data")
                  // console.log(err)
            })
      }, [])

      const updateSearch = e => {
            setSearchString(e.target.value.substr(0, 20));
      }

      //
      if(!projects) return null;

      const filteredProjects = 
      
      projects.filter(
            (project) => {
                  return project.name.toLowerCase().indexOf(searchString) !== -1 || project.description.toLowerCase().indexOf(searchString) !== -1;
            }
      )

      return (
            <div>
                  <TextField style={{padding: 24}}
                        id='searchInput'
                        type="search"
                        placeholder="search for..."
                        margin="normal"
                        onChange={e => updateSearch(e)} />
                  <Grid container spacing={24} style={{padding: 24}}>
                        { filteredProjects.map(currentProject => (
                              <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <Project project={currentProject} key={currentProject.id} />
                              </Grid>
                        ))}
                  </Grid>
            </div>
      )

}


export default ProjectSearch;
import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
// import * as contentful from 'contentful';
import Grid from '@material-ui/core/Grid';
import Project from './Project.js'

class ProjectSearch extends Component {
      state = {
            projects: [],
            searchString: ''
      }

      constructor() {
            super()
            this.getProjects()
      }

      // method to retrieve list of projects from the backend, returns array of projects
      getProjects = () => {
            axios.get('https://lambdaappstore2.herokuapp.com/api/projects')
            .then((res) => {
                  this.setState({projects: res.data})
                  console.log("projects.", res.data)
            })
            .catch((err) => {
                  console.log("Error occured while fetching data")
                  // console.log(err)
            })
      }


      updateSearch = e => {
            this.setState({searchString: e.target.value.substr(0, 20)});
      }
   
      

      render() {
            let filteredProjects = this.state.projects.filter(
                  (project) => {
                        return project.name.toLowerCase().indexOf(this.state.searchString) !== -1 || project.description.toLowerCase().indexOf(this.state.searchString) !== -1;
                  }
            )
            return (
                  <div>
                        <TextField style={{padding: 24}}
                              id='searchInput'
                              type="search"
                              key={this.state.id}
                              placeholder="search for..."
                              margin="normal"
                              onChange={this.updateSearch} />
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
      
}

export default ProjectSearch;
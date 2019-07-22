import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
// import * as contentful from 'contentful';
import Grid from '@material-ui/core/Grid';
import Project from './Project.js'

const results = axios.get('https://lambdaappstore2.herokuapp.com/api/projects')

class ProjectSearch extends Component {
      state = {
            projects: [],
            searchString: ''
      }

      constructor() {
            super()
            this.getProjects()
      }

      // method to retrieve list of projects from the backend
      getProjects = () => {
            axios.get('https://lambdaappstore2.herokuapp.com/api/projects', {
                  content_type: 'project',
                  query: this.state.searchString
            })
            .then((res) => {
                  this.setState({projects: res.data})
                  console.log(res.data)
            })
            .catch((err) => {
                  console.log("Error occured while fetching data")
                  console.log(err)
            })
      }

      onSearchInputChange = e => {
            if(e.target.value) {
                  this.setState({searchString: e.target.value})
            } else {
                  this.setState({searchString: ''})
            }
            //make sure you render the project list again after the change
            this.getProjects()
      }

      render() {
            return (
                  <div>
                        {this.state.projects ? (
                              <div>
                                    <TextField style={{padding: 24}}
                                          id='searchInput'
                                          placeholder="search"
                                          margin="normal"
                                          onChange={this.onSearchInputChange} />
                                    <Grid container spacing={24} style={{padding: 24}}
                                          { ...this.state.projects.map(currentProject => (
                                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                                      <Project project={currentProject} />
                                                </Grid> 
                                          ))}
                                    />
                              </div>
                        ) : "No projects found"}
                  </div>
            )
      }
      
}

export default ProjectSearch;
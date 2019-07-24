import React, { useEffect } from "react";
import { connect } from 'react-redux'
import { getProjects } from '../actions'

const Projects = props => {
  const { projects } = props
  useEffect(() => {
    props.getProjects()
    //eslint-disable-next-line
  }, [])
// props.projects
  return (
    <div>
      {projects && projects.map(project => (
        <div key={project.id}>
          <h1>Projects Test</h1>
          <p>{project.id}</p>
          <h1>{project.name}</h1>
          <h3>{project.hosted_url}</h3>
          <h3>{project.description}</h3>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = ({ projectsReducer }) => {
  return ({
    ...projectsReducer
  })
}
export default connect(mapStateToProps, { getProjects })(Projects);

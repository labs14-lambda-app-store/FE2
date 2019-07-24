import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { connect } from 'react-redux'
import { getProjects } from '../actions'

const Projects = props => {
  let isMounted = false;

  const [projects, setProjects] = useState();



  const fetchData = async () => {
    if(!props.projects) return null

    let result = await props.getProjects()
    result = await props.projects
    console.log(result)
  }

  useEffect(() => {
    fetchData()

  }, [ props.projects ])


//   export default function Example() {
//     const [data, dataSet] = useState(false)
//
//     async function fetchMyAPI() {
//       let response = await fetch('api/data')
//       response = await res.json()
//       console.log(response);
//       dataSet(response)
//     }
//
//     useEffect(() => {
//       fetchMyAPI();
//     }, []);
//
//   return <div>{data}</div>
// }

  if(!projects) return null
  return (
    <div>
      {projects.map(project => (
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

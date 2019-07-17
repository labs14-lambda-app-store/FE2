import React, {useState, useEffect} from "react"
import axios from "axios";


const Projects = () => {

  const [ projects, setProjects ] = useState([])

  useEffect(() => {
    axios.get(`https://lambdaappstore2.herokuapp.com/api/projects`).then(res => {
      setProjects(res.data)
    })
    .catch(err => console.log(err.message))
  }, [])

    return (
      <div>
        {projects.map(project => (
          <div key={project.id}>
            <p>{project.id}</p>
            <h1>{project.name}</h1>
            <h3>{project.url}</h3>
            <h3>{project.description}</h3>
          </div>
        ))}
      </div>
    );
}

export default Projects;

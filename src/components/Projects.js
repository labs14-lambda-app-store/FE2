import React, { useState, useEffect } from "react";
import axios from "axios";

const Projects = () => {
  let isMounted = false;

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    isMounted = true;
    axios
      .get(`https://lambdaappstore2.herokuapp.com/api/projects`)
      .then(res => {
        if (isMounted === true) {

          setProjects(res.data);
        } else {
        }
      })
      .catch(err => console.log(err.message));
    // isMounted = false;
  }, []);

  return (
    <div>
      <h1>Hi</h1>
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

export default Projects;

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
        if (isMounted) {
          setProjects(res.data);
        }
      })
      .catch(err => console.log(err.message));
    isMounted = false;
  }, []);

  return (
    <div>
      {projects.map(project => (
        <div>
          <p>{project.id}</p>
          <h1>{project.name}</h1>
          <h3>{project.url}</h3>
          <h3>{project.description}</h3>
        </div>
      ))}
    </div>
  );
};

export default Projects;

import React from "react";
import axios from "axios";

class Projects extends React.Component {
  state = {
    projects: []
  };

  componentDidMount() {
    axios.get(`https://lambdaappstore.herokuapp.com/api/projects`).then(res => {
      console.log(res);
      this.setState({
        projects: res.data
      });
    });
  }

  render() {
    return (
      <div>
        {this.state.projects.map(project => (
          <div>
            <p>{project.id}</p>
            <h1>{project.name}</h1>
            <h3>{project.url}</h3>
            <h3>{project.description}</h3>
          </div>
        ))}
      </div>
    );
  }
}

export default Projects;

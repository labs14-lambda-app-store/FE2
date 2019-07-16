import React from "react";

class ProjectForm extends React.Component {
  handleChanges = event => {};

  render() {
    return (
      <div>
        <h2>this will be a form</h2>
        <form>
          <input
            type="text"
            value={this.state.value} /*???*/
            placeholder="add new project..."
            onChange={this.handleChanges}
          />
        </form>
      </div>
    );
  }
}

export default ProjectForm;

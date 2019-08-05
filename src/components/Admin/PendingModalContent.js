import React from "react"
import Chip from "@material-ui/core/Chip"
import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
const primary = "#1a61b0"

const PendingModalContent = props => {
  const { project } = props
  return (
    <main className="modal-content">
      <div className="image-container">
        <img src={project.display_image} className="image" />
      </div>
      <h2 className="name">{project.name}</h2>
      <a className="link" href={project.hosted_url}>
        View Website
      </a>
      <p className="description">{project.description}</p>
      <div className="github">
        <h4>
          Github <i className="fab fa-github"></i>
        </h4>
        <ul>
          <li>
            <a href={project.frontend_url} target={"_blank"}>
              Frontend
            </a>
          </li>
          <li>
            <a href={project.backend_url} target={"_blank"}>
              Backend
            </a>
          </li>
        </ul>
      </div>
      <div className="admin-buttons">
        <Button
          className="admin-button"
          size="small"
          color="primary"
          onClick={() => (console.log("ello govna"))}
        >
          Approve
            </Button>
        <Button
          className="admin-button"
          size="small"
          color="primary"
          onClick={() => (console.log("ello govna"))}
        >
          Deny
            </Button>
      </div>
    </main>
  )
}

export default PendingModalContent

import React from "react"
import Chip from "@material-ui/core/Chip"
import Avatar from "@material-ui/core/Avatar"

import "../../styles/modal.scss"
const ModalContent = props => {
  const { project } = props
  return (
    <main className="modal-content">
      <h2 className="name">{project.name}</h2>
      <p className="description">{project.description}</p>
      <div className="github">
        <h4>
          Github <i className="fab fa-github"></i>
        </h4>
        <ul>
          <li>
            <a href={project.backend_url} target={"_blank"}>
              Backend
            </a>
          </li>
          <li>
            <a href={project.frontend_url} target={"_blank"}>
              Frontend
            </a>
          </li>
        </ul>
      </div>
      <div className="tags">
        {project.tags &&
          project.tags.map(tag => {
            return (
              <Chip
                variant="outlined"
                color="secondary"
                key={tag.tag_name}
                label={tag.tag_name}
                style={{ margin: "2px" }}
                avatar={
                  <Avatar>
                    <i className="fas fa-tag"></i>
                  </Avatar>
                }
              />
            )
          })}
      </div>
    </main>
  )
}

export default ModalContent

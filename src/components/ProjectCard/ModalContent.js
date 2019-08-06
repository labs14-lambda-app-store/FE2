import React from "react"
import Chip from "@material-ui/core/Chip"
import Avatar from "@material-ui/core/Avatar"

const primary = "#1a61b0"

const ModalContent = props => {
  const { project } = props
  return (
    <main className="modal-content">
      <div className="image-container">
        <img src={project.display_image} className="image" />
      </div>
      <h2 className="name">{project.name}</h2>
      {/* div for in-modal close button */}
      <div className='exit'>
        <i class="material-icons">clear</i>
      </div>
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
      <div className="tags">
        {project.tags &&
          project.tags.map(tag => {
            return (
              <Chip
                className="chip"
                variant="outlined"
                color="primary"
                key={tag.tag_name}
                label={tag.tag_name}
                style={{ margin: "2px .5rem 2px 0" }}
              />
            )
          })}
      </div>
    </main>
  )
}

export default ModalContent

import React from "react"
import Chip from "@material-ui/core/Chip"
import TagsList from "../reusable/TagsList"
import AdminButtons from "../reusable/AdminButtons"

const ModalContent = props => {
  const { project, setIsOpen, isModalOpen } = props
  return (
    <main className="modal-content">
      <div className="image-container">
        <img src={project.display_image} className="image" />
      </div>
      <h2 className="name">{project.name}</h2>
      {/* div for in-modal close button */}
      <div className='exit' onClick={() => setIsOpen(!isModalOpen)}>
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

      {project.is_approved ? <TagsList project={project} /> : <AdminButtons />}
    </main>
  )
}

export default ModalContent

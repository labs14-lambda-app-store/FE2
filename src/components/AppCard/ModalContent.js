import React from "react"
import { withRouter } from "react-router"

import TagsList from "../reusable/TagsList"
import AdminButtons from "../reusable/AdminButtons"

const ModalContent = ({ app, setIsOpen, isModalOpen, history }) => {
  return (
    <main className="modal-content">
      <div className="image-container">
        <img src={app.display_image} className="image" alt="App cover" />
      </div>
      <h2 className="name">{app.name}</h2>
      {/* div for in-modal close button */}
      <div className="exit" onClick={() => setIsOpen(!isModalOpen)}>
        <i className="material-icons">clear</i>
      </div>
      <a className="link" href={app.hosted_url} target={"_blank"}>
        View Website
      </a>
      <p className="description">{app.description}</p>
      <div className="github">
        <h4>
          Github <i className="fab fa-github"></i>
        </h4>
        <ul>
          <li>
            <a href={app.frontend_url} target={"_blank"}>
              Frontend
            </a>
          </li>
          <li>
            <a href={app.backend_url} target={"_blank"}>
              Backend
            </a>
          </li>
        </ul>
      </div>
      {app.is_approved ? (
        <TagsList app={app} />
      ) : (
        <AdminButtons
          app={app}
          setIsOpen={setIsOpen}
          isModalOpen={isModalOpen}
        />
      )}
      <button onClick={() => history.push(`/apps/${app.id}`)} />
    </main>
  )
}

export default withRouter(ModalContent)

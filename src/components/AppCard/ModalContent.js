import React from "react"
import { withRouter } from "react-router"

import TagsList from "../reusable/TagsList"
import AdminButtons from "../reusable/AdminButtons"

import Button from "@material-ui/core/Button"

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
      <div className="link">
        <Button className="app-button" color="primary">
          <a href={app.hosted_url} target={"_blank"}>
            View Website
          </a>
        </Button>
        <Button
          className="app-button"
          color="secondary"
          onClick={() => history.push(`/appPage/${app.id}`)}
        >
          Tell me more
        </Button>
      </div>
      <p className="description">{app.description}</p>
      <div className="github">
        <h4>
          Github <i className="fab fa-github"></i>
        </h4>
        <Button className="app-button" color="primary">
          <a href={app.frontend_url} target={"_blank"}>
            Frontend
          </a>
        </Button>
        <Button className="app-button" color="primary">
          <a href={app.backend_url} target={"_blank"}>
            Backend
          </a>
        </Button>
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
    </main>
  )
}

export default withRouter(ModalContent)

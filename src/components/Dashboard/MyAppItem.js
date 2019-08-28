import React, { useState } from "react"
import Button from "@material-ui/core/Button"
import Tooltip from "@material-ui/core/Tooltip"
import AppEditModal from "./AppEditModal"

const MyAppItem = ({ currentApp }) => {
      const [isOpen, setIsOpen] = useState(false)
  return (
    
      <div className="my-app">
        <div className="app-card">
          <img className="my-app-image" src={currentApp.display_image} />
          <div className="app-deets">
            <h2>{currentApp.name}</h2>
            <Tooltip title="edit this app" placement="top">
              <Button color="secondary" onClick={() => setIsOpen(true)}>
                <i className="fas fa-pencil-alt"></i>
              </Button>
            </Tooltip>
          </div>
        </div>
        <hr />
        <AppEditModal app={currentApp} isModalOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      
    
  )
}

export default MyAppItem

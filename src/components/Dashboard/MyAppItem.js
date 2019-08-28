import React, { useState } from "react"
import Button from "@material-ui/core/Button"
import Tooltip from "@material-ui/core/Tooltip"
import AppEditModal from "./AppEditModal"

const MyAppItem = ({ item }) => {
      const [isOpen, setIsOpen] = useState(false)
  return (
    
      <div className="my-app">
        <div className="app-card">
          <img className="my-app-image" src={item.display_image} />
          <div className="app-deets">
            <h2>{item.name}</h2>
            <Button color="secondary" onClick={() => setIsOpen(true)}>
              <i className="fas fa-pencil-alt"></i>
            </Button>
          </div>
        </div>
        <hr />
        <AppEditModal item={item} isModalOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      
    
  )
}

export default MyAppItem

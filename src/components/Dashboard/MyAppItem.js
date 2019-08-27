import React from "react"
import Button from "@material-ui/core/Button"
import Tooltip from "@material-ui/core/Tooltip"
import AppEditContent from "./AppEditContent"

const MyAppItem = ({ item, isOpen, setIsOpen }) => {
  return (
    <Tooltip title="Click to view" placement="top">
      <div
        className="my-app"
        onClick={() => setIsOpen(true)}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="app-card">
          <img className="my-app-image" src={item.display_image} />
          <div className="app-deets">
            <h2>{item.name}</h2>
            <Button color="secondary">
              <i className="fas fa-pencil-alt"></i>
            </Button>
          </div>
        </div>
        <hr />
      </div>
      <AppEditContent item={item} isModalOpen={isOpen} setIsOpen={setIsOpen} />
    </Tooltip>
  )
}

export default MyAppItem

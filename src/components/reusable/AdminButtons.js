import React from "react"
import Button from "@material-ui/core/Button"
const primary = "#1a61b0"

const AdminButtons = props => {
  return (
    <div className="admin-buttons">
      <Button
        className="admin-button"
        size="small"
        color="primary"
        onClick={() => console.log("ello govna")}
      >
        Approve
      </Button>
      <Button
        className="admin-button"
        size="small"
        color="primary"
        onClick={() => console.log("ello govna")}
      >
        Deny
      </Button>
    </div>
  )
}

export default AdminButtons

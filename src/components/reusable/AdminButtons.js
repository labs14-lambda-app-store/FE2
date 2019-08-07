import React from "react"
import Button from "@material-ui/core/Button"

const style ={fontSize: "1.8rem", margin: "0 20px"}

const AdminButtons = props => {
  return (
    <div className="admin-buttons">
      <Button
        className="admin-button"
        size="small"
        color="primary"
        onClick={() => console.log("ello govna")}
        style={style}
      >
        Approve
      </Button>
      <Button
        className="admin-button"
        size="small"
        color="secondary"
        onClick={() => console.log("ello govna")}
        style={style}
      >
        Deny
      </Button>
    </div>
  )
}

export default AdminButtons

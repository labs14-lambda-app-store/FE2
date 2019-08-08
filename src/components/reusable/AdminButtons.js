import React from "react"
import Button from "@material-ui/core/Button"

const style ={fontSize: "1.4rem", margin: "0 10px"}

const AdminButtons = props => {
  return (
    <div className="admin-buttons">
      <Button
        className="admin-button"
        size="small"
        color="primary"
        style={style}
        onClick={() => console.log("ello govna")}
      >
        Approve
      </Button>
      <Button
        className="admin-button"
        size="small"
        color="secondary"
        style={style}
        onClick={() => console.log("sorry govna")}
      >
        Deny
      </Button>
    </div>
  )
}

export default AdminButtons

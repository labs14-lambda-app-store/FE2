import React from "react"
import Button from "@material-ui/core/Button"
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { updateProject } from '../../actions/'
import { connect } from "react-redux"

const style = { fontSize: "1.4rem", margin: "0 10px" }

const AdminButtons = props => {
  const [handleDenyModal, setHandleDenyModal] = React.useState(false);
  const [handleApproveModal, setHandleApproveModal] = React.useState(false);
  const { project, } = props
  const { 
    id,
    name, 
    is_approved, 
    description, 
    hosted_url, 
    frontend_url, 
    backend_url, 
    approved_at, 
    submitted_at, 
    display_image, 
    in_development, 
    is_live, 
    is_featured, 
    category_id 
  } = props.project

  let updatedProject = {
    id,
    name,
    is_approved,
    description,
    hosted_url, 
    frontend_url, 
    backend_url, 
    approved_at, 
    submitted_at, 
    display_image, 
    in_development, 
    is_live, 
    is_featured, 
    category_id
  }


  function handleConfirm() {
    setHandleApproveModal(!handleApproveModal)
  }

  function handleDeny() {
    setHandleDenyModal(!handleDenyModal)
  }

  function updateProject(project, id) {
    props.updateProject(project, id)
  }

  return (
    <div className="admin-buttons">
      <Button
        className="admin-button"
        size="small"
        color="primary"
        style={style}
        onClick={handleConfirm}
      >
        Approve
      </Button>
      <Button
        className="admin-button"
        size="small"
        color="secondary"
        style={style}
        onClick={handleDeny}
      >
        Deny
      </Button>

      <Dialog
        open={handleApproveModal}
        onClose={handleConfirm}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Approve this project?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to approve this project? Approving this project will move it into the gallery.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirm} color="secondary">
            Cancel
          </Button>
          <Button onClick={() => updateProject({ ...updatedProject, is_approved: true }, id)} color="primary" autoFocus>
            Approve
          </Button>
        </DialogActions>
      </Dialog>
      {/* updateProject({...props.project, is_approved: true }, props.project.id) */}

      <Dialog
        open={handleDenyModal}
        onClose={handleDeny}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Deny this project?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to deny this project? Denying this project will not move it into the gallery.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeny} color="secondary">
            No
          </Button>
          <Button onClick={handleDeny} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

const mapStateToProps = ({ projectsReducer }) => {
  return {
    ...projectsReducer,
  }
}

export default connect(
  mapStateToProps,
  { updateProject }
)(AdminButtons)

import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

import {
  updateProject,
  deleteProject,
  getPendingProjects,
  addComment,
} from "../../actions/"

import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"

const style = { fontSize: "1.4rem", margin: "0 10px" }

const AdminButtons = props => {
  const [handleDenyModal, setHandleDenyModal] = React.useState(false)
  const [handleApproveModal, setHandleApproveModal] = React.useState(false)
  const [handleCommentModal, setHandleCommentModal] = React.useState(false)
  const {
    project,
    isModalOpen,
    setIsOpen,
    getPendingProjects,
  } = props

  let updatedProject = {
    id: project.id,
    name: project.name,
    is_approved: project.is_approved,
    description: project.description,
    hosted_url: project.hosted_url,
    frontend_url: project.frontend_url,
    backend_url: project.backend_url,
    approved_at: project.approved_at,
    submitted_at: project.submitted_at,
    display_image: project.display_image,
    in_development: project.in_development,
    is_live: project.is_live,
    is_featured: project.is_featured,
    category_id: project.category_id,
  }

  const [state, setStateValues] = React.useState({
    comment: "",
    project_id: project.id,
  })
  console.log({ comment: state.comment })

  const handleStateChanges = e => {
    setStateValues({ ...state, [e.target.name]: e.target.value })
  }

  function handleConfirm() {
    setHandleApproveModal(!handleApproveModal)
  }

  function handleDeny() {
    setHandleDenyModal(!handleDenyModal)
  }

  function handleComment() {
    setHandleCommentModal(!handleCommentModal)
  }

  function handleAddComment(comment) {
    addComment(comment).then(res => {
      setIsOpen(!isModalOpen)
    })
  }

  function handleUpdateProject(project, id) {
    props.updateProject(project, id).then(res => {
      setIsOpen(!isModalOpen)
      getPendingProjects()
    })
  }

  function handleDeleteProject(id) {
    props.deleteProject(id).then(res => {
      setIsOpen(!isModalOpen)
      getPendingProjects()
    })
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
      <Button
        className="admin-button"
        size="small"
        color="default"
        style={style}
        onClick={handleComment}
      >
        +
      </Button>

      <Dialog
        open={handleApproveModal}
        onClose={handleConfirm}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Approve this project?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to approve this project? Approving this
            project will move it into the gallery.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirm} color="secondary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              handleUpdateProject(
                { ...updatedProject, is_approved: true },
                project.id
              )
            }}
            color="primary"
            autoFocus
          >
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
        <DialogTitle id="alert-dialog-title">
          {"Deny this project?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to deny this project? Denying this project
            will delete this project.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeny} color="secondary">
            No
          </Button>
          <Button
            onClick={() => {
              handleDeleteProject(project.id)
            }}
            color="primary"
            autoFocus
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={handleCommentModal}
        onClose={handleComment}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Comment</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To leave a comment on this project, please enter your thoughts here.
          </DialogContentText>
          <TextField
            autoFocus
            value={state.comment}
            name="comment"
            margin="dense"
            id="name"
            label="Comment"
            type="text"
            fullWidth
            onChange={e => handleStateChanges(e)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleComment} color="primary">
            Cancel
          </Button>
          <Button onClick={() => handleAddComment(state)} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

const mapStateToProps = ({ projectsReducer, commentsReducer }) => {
  return {
    ...projectsReducer,
    commentsReducer,
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    { updateProject, deleteProject, getPendingProjects, addComment }
  )(AdminButtons)
)

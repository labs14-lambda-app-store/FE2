import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

import {
  updateProject,
  deleteProject,
  getProjects,
  addComment,
} from "../../actions/"

import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import { func } from "prop-types"

const style = { fontSize: "1.4rem", margin: "0 10px" }

const AdminButtons = props => {
  const [handleDenyModal, setHandleDenyModal] = React.useState(false)
  const [handleApproveModal, setHandleApproveModal] = React.useState(false)
  const [handleCommentModal, setHandleCommentModal] = React.useState(false)
  const [comment, setComment] = React.useState("")
  console.log({ comment })
  const {
    project,
    history,
    isModalOpen,
    setIsOpen,
    getProjects,
    addComment,
  } = props
  console.log(props)
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
    category_id,
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
    category_id,
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
    props.addComment(comment).then(res => {
      setIsOpen(!isModalOpen)
    })
  }

  function handleUpdateProject(project, id) {
    props.updateProject(project, id).then(res => {
      setIsOpen(!isModalOpen)
      getProjects()
    })
  }

  function handleDeleteProject(id) {
    props.deleteProject(id).then(res => {
      setIsOpen(!isModalOpen)
      getProjects()
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
        Comment
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
              handleUpdateProject({ ...updatedProject, is_approved: true }, id)
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
              handleDeleteProject(id)
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
            value={comment}
            margin="dense"
            id="name"
            label="Comment"
            type="text"
            fullWidth
            onChange={e => setComment(e)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleComment} color="primary">
            Cancel
          </Button>
          <Button onClick={() => handleAddComment(comment)} color="primary">
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
    { updateProject, deleteProject, getProjects, addComment }
  )(AdminButtons)
)

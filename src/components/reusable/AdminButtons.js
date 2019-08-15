import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

import {
  updateApp,
  deleteApp,
  getPendingApps,
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
    app,
    isModalOpen,
    setIsOpen,
    getPendingApps,
  } = props

  let updatedApp = {
    id: app.id,
    name: app.name,
    is_approved: app.is_approved,
    description: app.description,
    hosted_url: app.hosted_url,
    frontend_url: app.frontend_url,
    backend_url: app.backend_url,
    approved_at: app.approved_at,
    submitted_at: app.submitted_at,
    display_image: app.display_image,
    in_development: app.in_development,
    is_live: app.is_live,
    is_featured: app.is_featured,
    category_id: app.category_id,
  }

  const [state, setStateValues] = React.useState({
    comment: "",
    app_id: app.id,
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
    props.addComment(comment).then(res => {
      setIsOpen(!isModalOpen)
    })
  }

  function handleUpdateApp(app, id) {
    props.updateApp(app, id).then(res => {
      setIsOpen(!isModalOpen)
      getPendingApps()
    })
  }

  function handleDeleteApp(id) {
    props.deleteApp(id).then(res => {
      setIsOpen(!isModalOpen)
      getPendingApps()
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
          {"Approve this app?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to approve this app? Approving this
            app will move it into the gallery.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirm} color="secondary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              handleUpdateApp(
                { ...updatedApp, is_approved: true },
                app.id
              )
            }}
            color="primary"
            autoFocus
          >
            Approve
          </Button>
        </DialogActions>
      </Dialog>
      {/* updateApp({...props.app, is_approved: true }, props.app.id) */}

      <Dialog
        open={handleDenyModal}
        onClose={handleDeny}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Deny this app?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to deny this app? Denying this app
            will delete this app.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeny} color="secondary">
            No
          </Button>
          <Button
            onClick={() => {
              handleDeleteApp(app.id)
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
            To leave a comment on this app, please enter your thoughts here.
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

const mapStateToProps = ({ appsReducer, commentsReducer }) => {
  return {
    ...appsReducer,
    commentsReducer,
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    { updateApp, deleteApp, getPendingApps, addComment }
  )(AdminButtons)
)

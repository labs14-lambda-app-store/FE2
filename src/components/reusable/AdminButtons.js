import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

import {
  updateApp,
  deleteApp,
  getPendingApps,
  addComment,
} from "../../actions/"

import Dialog from "@material-ui/core/Dialog"
import Button from "@material-ui/core/Button"
import Tooltip from "@material-ui/core/Tooltip"
import TextField from "@material-ui/core/TextField"
import DialogTitle from "@material-ui/core/DialogTitle"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"


const style = { fontSize: "1.4rem" }

const AdminButtons = props => {
  const [handleDenyModal, setHandleDenyModal] = React.useState(false)
  const [handleApproveModal, setHandleApproveModal] = React.useState(false)
  const [handleCommentModal, setHandleCommentModal] = React.useState(false)
  const { app, isModalOpen, setIsOpen, getPendingApps } = props

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
    addComment(comment).then(res => {
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
      <Tooltip title="Approve" placement="top">
        <Button
          className="admin-button"
          size="small"
          color="primary"
          style={style}
          onClick={handleConfirm}
        >
          <i class="fas fa-check-circle fa-lg"></i>
        </Button>
      </Tooltip>
      <Tooltip title="Deny" placement="top">
        <Button
          className="admin-button"
          size="small"
          color="secondary"
          style={style}
          onClick={handleDeny}
        >
          <i class="fas fa-times-circle fa-lg"></i>
        </Button>
      </Tooltip>
      <Tooltip title="Add Feedback" placement="top">
        <Button
          className="admin-button"
          size="small"
          color="default"
          style={style}
          onClick={handleComment}
        >
          <i class="fas fa-plus-circle fa-lg"></i>
        </Button>
      </Tooltip>

      <Dialog
        open={handleApproveModal}
        onClose={handleConfirm}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Approve this app?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to approve this app? Approving this app will
            move it into the gallery.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Tooltip  title="No" placement="top">
            <Button onClick={handleConfirm} color="secondary">
            <i class="fas fa-times-circle fa-3x"></i>
            </Button>
          </Tooltip>
          <Tooltip  title="Yes" placement="top">
            <Button
              onClick={() => {
                handleUpdateApp({ ...updatedApp, is_approved: true }, app.id)
              }}
              color="primary"
              autoFocus
            >
              <i class="fas fa-check-circle fa-3x"></i>
            </Button>
          </Tooltip>
        </DialogActions>
      </Dialog>
      {/* updateApp({...props.app, is_approved: true }, props.app.id) */}

      <Dialog
        open={handleDenyModal}
        onClose={handleDeny}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Deny this app?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to deny this app? Denying this app will delete
            this app.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Tooltip title="No" placement="top">
            <Button onClick={handleDeny} color="secondary">
            <i class="fas fa-times-circle fa-3x"></i>
            </Button>
          </Tooltip>
          <Tooltip title="Yes" placement="top">
            <Button
              onClick={() => {
                handleDeleteApp(app.id)
              }}
              color="primary"
              autoFocus
            >
              <i class="fas fa-check-circle fa-3x"></i>
            </Button>
          </Tooltip>
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
            To give constructive feedback, please enter your thoughts here.
          </DialogContentText>
          <TextField
            autoFocus
            value={state.comment}
            name="comment"
            margin="dense"
            id="name"
            placeholder=" start typing . . . "
            type="text"
            fullWidth
            onChange={e => handleStateChanges(e)}
          />
        </DialogContent>
        <DialogActions>
        <Tooltip title="Cancel" placement="top">
          <Button onClick={handleComment} color="secondary">
          <i class="fas fa-times-circle fa-3x"></i>
          </Button>
          </Tooltip>
          <Tooltip title="Submit" placement="top">
          <Button onClick={() => handleAddComment(state)} color="primary">
          <i class="fas fa-check-circle fa-3x"></i>
          </Button>
          </Tooltip>
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

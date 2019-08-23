import React from "react"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Button from "@material-ui/core/Button"
import { connect } from "react-redux"
import Loader from "react-loader-spinner"
import { SnackBarPopup } from "../reusable"

//MUI button style overwrite with INLINE STYLES
const style = {
  fontSize: "1.6rem",
  padding: "20px",
}

const Confirm = ({
  nextStep,
  prevStep,
  handlePost,
  state,
  isAddingImage,
  isAddingApp,
  message,
  status_code,
  isPopupOpen,
}) => {
  const {
    description,
    name,
    hosted_url,
    frontend_url,
    backend_url,
    category,
  } = state

  const Back = e => {
    e.preventDefault()
    prevStep()
  }

  const createButtonContent = () => {
    if (isAddingImage || isAddingApp) {
      return <Loader type="ThreeDots" height={80} width={80} />
    } else {
      return "Submit Project"
    }
  }

  return (
    <div className="submission">
      <h1> Confirm App Data </h1>
      <List inputProps={{ "data-testid": "Confirm-List" }}>
        <ListItem button>
          <ListItemText primary="Name" secondary={name} />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Description" secondary={description} />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Hosted URL" secondary={hosted_url} />
        </ListItem>
        {frontend_url && (
          <ListItem button>
            <ListItemText primary="Front-End URL" secondary={frontend_url} />
          </ListItem>
        )}
        {backend_url && (
          <ListItem button>
            <ListItemText primary="Back-End URL" secondary={backend_url} />
          </ListItem>
        )}
        <ListItem button>
          <ListItemText primary="Category" secondary={category.category_name} />
        </ListItem>
      </List>
      <br />
      <Button
        style={style}
        label="Confirm & Continue"
        color="primary"
        onClick={e => handlePost(e)}
      >
        {createButtonContent()}
      </Button>
      <Button
        style={style}
        label="Back"
        color="secondary"
        onClick={e => Back(e)}
      >
        Back
      </Button>
      <SnackBarPopup
        variant={status_code === 201 ? "success" : "error"}
        message={message}
        open={isPopupOpen}
      />
    </div>
  )
}

const mapStateToProps = ({ imagesReducer, appsReducer }) => {
  return {
    isAddingImage: imagesReducer.isAdding,
    isAddingApp: appsReducer.isAdding,
    message: appsReducer.message,
    status_code: appsReducer.status_code,
  }
}

export default connect(
  mapStateToProps,
  {}
)(Confirm)

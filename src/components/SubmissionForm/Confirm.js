import React, { useEffect } from "react"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Button from "@material-ui/core/Button"
import { connect } from "react-redux"
import Loader from "react-loader-spinner"

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
    } else if (message) return message
    else {
      return "Submit Project"
    }
  }

  return (
    <div className="submission">
      <h1> Confirm App Data </h1>
      <List>
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
        // onClick={e => (!isAddingImage ? Continue(e) : null)}
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
    </div>
  )
}

const mapStateToProps = ({ imagesReducer, appsReducer }) => {
  return {
    isAddingImage: imagesReducer.isAdding,
    isAddingApp: appsReducer.isAdding,
    message: appsReducer.message,
  }
}

export default connect(
  mapStateToProps,
  {}
)(Confirm)

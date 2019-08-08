import React from "react"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Button from "@material-ui/core/Button"
import { connect } from "react-redux"
import Loader from "react-loader-spinner"

//imported Material UI packages above,
// and implemented them in a functional component below
//MUI button style overwrite with INLINE STYLES
const style = {
  fontSize: "1.6rem",
  padding: "20px",
}

const Confirm = props => {
  const {
    nextStep,
    prevStep,
    handlePost,
    state,
    isAddingImage,
    isAddingProject,
  } = props

  const {
    description,
    name,
    hosted_url,
    frontend_url,
    backend_url,
    category,
  } = state

  const Continue = e => {
    e.preventDefault()
    handlePost(e)
    nextStep()
  }

  const Back = e => {
    e.preventDefault()
    prevStep()
  }

  return (
    <div className="submission">
      <h1> Confirm Submission Data </h1>
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
        {/* <ListItem button><ListItemText primary='Tags' secondary={tags} /></ListItem> */}
      </List>
      <br />
      <Button
        style={style}
        label="Confirm & Continue"
        color="primary"
        onClick={e => (!isAddingImage && !isAddingProject ? Continue(e) : null)}
      >
        {isAddingImage || isAddingProject ? (
          <Loader type="ThreeDots" color="#somecolor" height={80} width={80} />
        ) : (
          "Confirm & Continue"
        )}
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

const mapStateToProps = ({ imagesReducer, projectsReducer }) => {
  return {
    isAddingImage: imagesReducer.isAdding,
    isAddingProject: projectsReducer.isAdding,
  }
}

export default connect(
  mapStateToProps,
  {}
)(Confirm)

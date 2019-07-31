import React from "react"
import { connect } from "react-redux"
import TextField from "@material-ui/core/TextField"
import MenuItem from "@material-ui/core/MenuItem"
import Button from "@material-ui/core/Button"
import { DropzoneArea } from "material-ui-dropzone"

import { sendImageToCloudinary } from "../../actions"
//imported Material UI packages above,
// and implemented them in a functional component below

//MUI button style overwrite with INLINE STYLES
const style = {
  'fontSize': '1.6rem',
  'padding': '20px'
};

const ProjectDetails = props => {
  const {
    nextStep,
    state,
    handleStateChanges,
    sendImageToCloudinary,
    setStateValues,
  } = props

  const {
    hosted_url,
    frontend_url,
    backend_url,
    name,
    description,
    category_name,
    display_image,
    image_dropdown,
    // tags,         take out tags til the table works
  } = state

  //hardcoded because the backend end point was an empty array
  const categories = [
    { category_name: "Business" },
    { category_name: "Entertainment" },
    { category_name: "Education" },
    { category_name: "Games" },
    { category_name: "Music" },
    { category_name: "Medical" },
    { category_name: "Health & Fitness" },
    { category_name: "Food & Drink" },
    { category_name: "Finance" },
    { category_name: "Books" },
    { category_name: "Social Networking" },
    { category_name: "Shopping" },
    { category_name: "Photo & Video" },
    { category_name: "News" },
    { category_name: "Navigation" },
    { category_name: "Sports" },
    { category_name: "Travel" },
    { category_name: "Weather" },
  ]

  const Continue = e => {
    e.preventDefault()
    nextStep()
  }

  //sort categories alphabetically
  const sortCategories = categories.sort(function(a, b) {
    if (a.category_name < b.category_name) {
      return -1
    }
    if (a.category_name > b.category_name) {
      return 1
    }
    return 0
  })

  return (
    <div>
      <form className="submission">
        <h1>Submit Your App</h1>
        <TextField
          className="submitInput"
          type="text"
          value={name} /*???*/
          required
          name="name"
          id="standard-required"
          placeholder="App Name"
          margin="normal"
          onChange={e => handleStateChanges(e)}
        />
        <br />
        <TextField
          value={category_name}
          className="submitInput"
          id="standard-select standard-required"
          required
          select
          label="Categories"
          name="category_name"
          helperText="Please select primary category"
          margin="normal"
          onChange={e => handleStateChanges(e)}
        >
          {sortCategories.map(category => (
            <MenuItem
              value={category.category_name}
              key={category.category_name}
            >
              {category.category_name}
            </MenuItem>
          ))}
        </TextField>
        <br />
        <TextField
          className="submitInput"
          type="text"
          value={description}
          required
          id="standard-required"
          placeholder="Description"
          name="description"
          margin="normal"
          onChange={e => handleStateChanges(e)}
        />
        <br />
        <TextField
          className="submitInput"
          type="text"
          value={hosted_url}
          required
          id="standard-required"
          placeholder="Hosted URL"
          margin="normal"
          name="hosted_url"
          onChange={e => handleStateChanges(e)}
        />
        <br />
        <TextField
          className="submitInput"
          type="text"
          value={frontend_url}
          placeholder="Frontend URL"
          margin="normal"
          name="frontend_url"
          onChange={e => handleStateChanges(e)}
        />
        <br />
        <TextField
          className="submitInput"
          type="text"
          value={backend_url}
          placeholder="Backend URL"
          margin="normal"
          name="backend_url"
          onChange={e => handleStateChanges(e)}
        />
        <br />
        <div className="dropzone">
          <DropzoneArea
            filesLimit={1}
            acceptedFiles={["image/*"]}
            onChange={e => setStateValues({ ...state, display_image: e[0] })}
          />
        </div>
        {/* <TextField
          className="submitInput"
          type="text"
          value={tags}
          placeholder="tags..."
          margin="normal"
          name="tags"
          onChange={e => handleStateChanges(e)}
        />  */}
        <br />
        <Button
          style={style}
          label="Continue"
          type="submit"
          color="primary"
          disabled={!name || !description || !hosted_url ? true : false}
          onClick={e => {
            e.preventDefault()
            sendImageToCloudinary(display_image)
            Continue(e)
          }}
        >
          Continue
        </Button>
        )
      </form>
    </div>
  )
}

export default connect(
  null,
  { sendImageToCloudinary }
)(ProjectDetails)

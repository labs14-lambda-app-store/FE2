import React from "react"
import { connect } from "react-redux"
import { DropzoneArea } from "material-ui-dropzone"
import TextField from "@material-ui/core/TextField"
import MenuItem from "@material-ui/core/MenuItem"
import Button from "@material-ui/core/Button"
import validator from "validator"

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
    error_message,
    // tags,         take out tags til the table works
  } = state

  const charactersLeft = 255 - description.length

  const isURLValid = (url) => {
    console.log(state)
    if (validator.isURL(url)) {
      setStateValues({ ...state, error_message: '' })
      return true
    } else {
      setStateValues({ ...state, error_message: 'Hosted URL is invalid, please include www or http' })
      return false
    }
  }

  const categories = [
    { id: 1, category_name: "Business" },
    { id: 2, category_name: "Entertainment" },
    { id: 3, category_name: "Education" },
    { id: 4, category_name: "Games" },
    { id: 5, category_name: "Music" },
    { id: 6, category_name: "Medical" },
    { id: 7, category_name: "Health & Fitness" },
    { id: 8, category_name: "Food & Drink" },
    { id: 9, category_name: "Finance" },
    { id: 10, category_name: "Books" },
    { id: 11, category_name: "Social Networking" },
    { id: 12, category_name: "Shopping" },
    { id: 13, category_name: "Photo & Video" },
    { id: 14, category_name: "News" },
    { id: 15, category_name: "Navigation" },
    { id: 16, category_name: "Sports" },
    { id: 17, category_name: "Travel" },
    { id: 18, category_name: "Weather" },
  ]

  const Continue = e => {
    e.preventDefault()
    nextStep()
  }

  //sort categories alphabetically
  const sortCategories = categories.sort(function (a, b) {
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
          value={category_name}
          className="submitInput"
          id="standard-select standard-required"
          required
          select
          label="Categories"
          name="category_name"
          helperText="Please select one"
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
          value={name} /*???*/
          required
          name="name"
          id="standard-required"
          placeholder="App Name*"
          margin="normal"
          onChange={e => handleStateChanges(e)}
        />
        <br />
        <TextField
          className="submitInput"
          type="text"
          value={description}
          required
          id="standard-required"
          placeholder="Description*"
          name="description"
          helperText={`${charactersLeft} characters remaining...`}
          margin="normal"
          onChange={e => handleStateChanges(e)}
          inputProps={{ maxLength: 255 }}
        />
        <br />
        <TextField
          error={ error_message ? true : false }
          className="submitInput"
          type="text"
          value={hosted_url}
          required
          id="standard-required"
          placeholder="Hosted URL*"
          margin="normal"
          name="hosted_url"
          onChange={e => handleStateChanges(e)}
          onBlur={e => isURLValid(hosted_url)}
          helperText={error_message && error_message}
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
        {/* <br /> */}
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
          disabled={!name || !description || !hosted_url || error_message ? true : false}
          onClick={e => {
            e.preventDefault()
            sendImageToCloudinary(display_image)
            Continue(e)
          }}
        >
          Continue
        </Button>

      </form>
    </div>
  )
}

export default connect(
  null,
  { sendImageToCloudinary }
)(ProjectDetails)

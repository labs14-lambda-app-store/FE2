import React, { useEffect, useState } from "react"
import axios from "axios"
import { connect } from "react-redux"

import Button from "@material-ui/core/Button"
import MenuItem from "@material-ui/core/MenuItem"
import TextField from "@material-ui/core/TextField"
import { DropzoneArea } from "material-ui-dropzone"

import { isUrlValid } from "../../utils/helpers"
import { sendImageToCloudinary } from "../../actions"
//imported Material UI packages above,
// and implemented them in a functional component below

//MUI button style overwrite with INLINE STYLES
const style = {
  fontSize: "1.6rem",
  padding: "20px",
}

const AppDetails = ({
  nextStep,
  state,
  handleStateChanges,
  sendImageToCloudinary,
  setStateValues,
}) => {
  const {
    hosted_url,
    frontend_url,
    backend_url,
    name,
    description,
    display_image,
    category,
    error_message_hosted,
    error_message_frontend,
    error_message_backend,
  } = state

  const [categories, setCategories] = useState("")

  useEffect(() => {
    getCategories()
  }, [])

  const getCategories = async () => {
    const result = await axios.get(
      "https://lambdaappstore2.herokuapp.com/api/categories"
    )
    const categories = result.data
    setCategories(categories)
  }

  const charactersLeft = 255 - description.length

  const Continue = e => {
    e.preventDefault()
    nextStep()
  }

  return (
    <div>
      <form className="submission">
        <h1>Submit Your App</h1>
        <TextField
          className="submitInput"
          value={category}
          id="standard-select standard-required"
          required
          select
          variant="outlined"
          label="Categories"
          inputProps={{ "data-testid": "categories" }}
          name="category"
          helperText="Please select one"
          margin="normal"
          onChange={e =>
            setStateValues({
              ...state,
              category: e.target.value,
            })
          }
        >
          {categories &&
            categories.map(category => (
              <MenuItem value={category} key={category.category_name}>
                {category.category_name}
              </MenuItem>
            ))}
        </TextField>
        <TextField
          className="submitInput"
          type="text"
          value={name}
          variant="outlined"
          required
          id="standard-required"
          label="App Name"
          inputProps={{ "data-testid": "app name" }}
          name="name"
          onChange={e => handleStateChanges(e)}
        />
        <TextField
          className="submitInput"
          type="text"
          value={description}
          variant="outlined"
          required
          multiline
          rows={3}
          label="Description"
          name="description"
          helperText={`${charactersLeft} characters remaining...`}
          onChange={e => handleStateChanges(e)}
          inputProps={{ maxLength: 255, "data-testid": "description" }}
        />
        <TextField
          error={error_message_hosted ? true : false}
          className="submitInput"
          type="text"
          value={hosted_url}
          variant="outlined"
          required
          id="standard-required"
          inputProps={{ "data-testid": "hosted url" }}
          label="Hosted URL"
          name="hosted_url"
          onChange={e => handleStateChanges(e)}
          onBlur={e =>
            isUrlValid(
              hosted_url,
              state,
              setStateValues,
              "error_message_hosted"
            )
          }
          helperText={error_message_hosted && error_message_hosted}
        />
        <TextField
          error={error_message_frontend ? true : false}
          className="submitInput"
          type="text"
          value={frontend_url}
          variant="outlined"
          label="Frontend URL"
          inputProps={{ "data-testid": "frontend url" }}
          name="frontend_url"
          onChange={e => handleStateChanges(e)}
          onBlur={e =>
            isUrlValid(
              frontend_url,
              state,
              setStateValues,
              "error_message_frontend"
            )
          }
          helperText={error_message_frontend && error_message_frontend}
        />
        <TextField
          error={error_message_backend ? true : false}
          className="submitInput"
          type="text"
          value={backend_url}
          variant="outlined"
          label="Backend URL"
          inputProps={{ "data-testid": "backend url" }}
          name="backend_url"
          onChange={e => handleStateChanges(e)}
          onBlur={e =>
            isUrlValid(
              backend_url,
              state,
              setStateValues,
              "error_message_backend"
            )
          }
          helperText={error_message_backend && error_message_backend}
        />
        {/* <br /> */}
        <div className="dropzone">
          <DropzoneArea
            filesLimit={1}
            acceptedFiles={["image/*"]}
            onChange={e => setStateValues({ ...state, display_image: e[0] })}
            dropzoneText="Drag and drop or click to add a screenshot that showcases your app"
            maxFileSize={5000000}
            inputProps={{ "data-testid": "dropzone" }}
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
        <Button
          data-testid="continue-button"
          style={style}
          label="Continue"
          type="submit"
          color="primary"
          //checks the app name, description, hosted_url: if any of those are missing, disable Button
          //will also disable button if error_message exists
          disabled={
            !name ||
            !description ||
            !hosted_url ||
            error_message_hosted ||
            error_message_frontend ||
            error_message_backend
              ? true
              : false
          }
          onClick={e => {
            e.preventDefault()
            display_image && sendImageToCloudinary(display_image)
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
)(AppDetails)

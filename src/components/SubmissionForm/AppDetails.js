import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { DropzoneArea } from "material-ui-dropzone"
import TextField from "@material-ui/core/TextField"
import MenuItem from "@material-ui/core/MenuItem"
import Button from "@material-ui/core/Button"
import validator from "validator"
import axios from "axios"

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

  //checks a url against the validator isUrl regex to check if url is a valid https or www location
  const hostedUrlValid = url => {
    validator.isURL(url, {
      protocols: ["http", "https"],
      require_protocol: true,
    })
      ? setStateValues({ ...state, error_message_hosted: "" })
      : setStateValues({
          ...state,
          error_message_hosted:
            "Invalid Hosted URL. Please enter a URL that includes http:// or https://",
        })
  }

  const frontendUrlValid = url => {
    validator.isURL(url, {
      protocols: ["http", "https"],
      require_protocol: true,
    })
      ? setStateValues({ ...state, error_message_frontend: "" })
      : setStateValues({
          ...state,
          error_message_frontend:
            "Invalid Frontend URL. Please enter a URL that includes http:// or https://",
        })
  }

  const backendUrlValid = url => {
    validator.isURL(url, {
      protocols: ["http", "https"],
      require_protocol: true,
    })
      ? setStateValues({ ...state, error_message_backend: "" })
      : setStateValues({
          ...state,
          error_message_backend:
            "Invalid Backend URL. Please enter a URL that includes http:// or https://",
        })
  }

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
          variant="outlined"
          type="text"
          value={name} /*???*/
          required
          name="name"
          id="standard-required"
          label="App Name"
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
          inputProps={{ maxLength: 255 }}
        />
        <TextField
          error={error_message_hosted ? true : false}
          className="submitInput"
          type="text"
          value={hosted_url}
          variant="outlined"
          required
          id="standard-required"
          label="Hosted URL"
          name="hosted_url"
          onChange={e => handleStateChanges(e)}
          onBlur={e => hostedUrlValid(hosted_url)}
          helperText={error_message_hosted && error_message_hosted}
        />
        <TextField
          error={error_message_frontend ? true : false}
          className="submitInput"
          type="text"
          value={frontend_url}
          variant="outlined"
          label="Frontend URL"
          name="frontend_url"
          onChange={e => handleStateChanges(e)}
          onBlur={e => frontendUrlValid(frontend_url)}
          helperText={error_message_frontend && error_message_frontend}
        />
        <TextField
          error={error_message_backend ? true : false}
          className="submitInput"
          type="text"
          value={backend_url}
          variant="outlined"
          label="Backend URL"
          name="backend_url"
          onChange={e => handleStateChanges(e)}
          onBlur={e => backendUrlValid(backend_url)}
          helperText={error_message_backend && error_message_backend}
        />
        {/* <br /> */}
        <div className="dropzone">
          <DropzoneArea
            filesLimit={1}
            acceptedFiles={["image/*"]}
            onChange={e => setStateValues({ ...state, display_image: e[0] })}
            dropzoneText="Drag and drop or click to add a screenshot that showcases your app"
            maxFileSize="5000000"
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

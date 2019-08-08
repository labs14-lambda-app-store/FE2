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
    category_id,
    display_image,
    image_dropdown,
    error_message,
    // tags,         take out tags til the table works
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

    console.log(categories)
  }
  const charactersLeft = 255 - description.length

  //checks a url against the validator isUrl regex to check if url is a valid https or www location
  const isURLValid = url => {
    if (validator.isURL(url)) {
      setStateValues({ ...state, error_message: "" })
    } else {
      setStateValues({
        ...state,
        error_message: "Hosted URL is invalid, please include www or http",
      })
    }
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
          error={error_message ? true : false}
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
            //filter through categories and set category_id state to id of category that matches
            setStateValues({
              ...state,
              category_id: categories.find(
                category => category.category_name === category_name
              ),
            })
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

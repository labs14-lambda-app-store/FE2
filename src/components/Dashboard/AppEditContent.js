import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import axios from "axios"
import Button from "@material-ui/core/Button"
import Tooltip from "@material-ui/core/Tooltip"
import MenuItem from "@material-ui/core/MenuItem"
import TextField from "@material-ui/core/TextField"
import { updateApp } from "../../actions"
import { isUrlValid } from "../../utils/helpers"

const AppEditContent = ({ app, user, setIsOpen, isModalOpen, updateApp }) => {
  const {
    display_image,
    name,
    description,
    frontend_url,
    backend_url,
    hosted_url,
    tag_name,
    category,
    id
  } = app

  const [updatedApp, setUpdatedApp] = useState({
    display_image,
    name,
    id,
    description,
    frontend_url,
    backend_url,
    hosted_url,
    category: category[0].category_name,
    tag_name,
    error_message_hosted: "",
    error_message_frontend: "",
    error_message_backend: ""
    
  })

  const [categories, setCategories] = useState("")

  useEffect(() => {
    console.log('app', updatedApp)
    getCategories()
  }, [])

  const getCategories = async () => {
    const result = await axios.get(
      "https://lambdaappstore2.herokuapp.com/api/categories"
    )
    const categories = result.data
    setCategories(categories)
  }

  const [tags, setTags] = useState("")

  useEffect(() => {
    getTags()
  }, [])

  const getTags = async () => {
    const result = await axios.get(
      "https://lambdaappstore2.herokuapp.com/api/tags"
    )
    const tags = result.data
    setTags(tags)
  }

  function handleUpdateApp(change, id) {
    console.log("change", change)
    console.log("id", id)
    console.log('updated app', updatedApp)
    updateApp(change, id).then(res => {
      setIsOpen(!isModalOpen)
      
    })
  }

  const handleChanges = e => {
    setUpdatedApp({ ...updatedApp, [e.target.name]: e.target.value })
  }

  return (
    <main className="app-edit-content">
      <h2>Every change must be approved by admin</h2>
      <div className="app-edit-form">
        <TextField
          id="outlined-with-placeholder"
          margin="normal"
          variant="outlined"
          value={updatedApp.name}
          name="name"
          label="name"
          onChange={e => {
            handleChanges(e)
          }}
        />
        <TextField
          id="outlined-with-placeholder"
          margin="normal"
          variant="outlined"
          value={updatedApp.display_image}
          name="display_image"
          label="display_image"
          onChange={e => {
            handleChanges(e)
          }}
        />
        <TextField
          id="outlined-with-placeholder"
          margin="normal"
          variant="outlined"
          value={updatedApp.description}
          name="description"
          label="description"
          onChange={e => {
            handleChanges(e)
          }}
        />
        <TextField
        error={updatedApp.error_message_frontend ? true : false}
          id="outlined-with-placeholder"
          margin="normal"
          variant="outlined"
          value={updatedApp.frontend_url}
          name="frontend_url"
          label="frontend_url"
          onChange={e => {
            handleChanges(e)
          }}
          onBlur={e => isUrlValid(updatedApp.frontend_url, updatedApp, setUpdatedApp, "error_message_frontend")}
          helperText={updatedApp.error_message_frontend && updatedApp.error_message_frontend}
        />
        <TextField
        error={updatedApp.error_message_backend ? true : false}
          id="outlined-with-placeholder"
          margin="normal"
          variant="outlined"
          value={updatedApp.backend_url}
          name="backend_url"
          label="backend_url"
          onChange={e => {
            handleChanges(e)
          }}
          onBlur={e => isUrlValid(updatedApp.backend_url, updatedApp, setUpdatedApp, "error_message_backend")}
          helperText={updatedApp.error_message_backend && updatedApp.error_message_backend}
        />
        <TextField
          error={updatedApp.error_message_hosted ? true : false}
          id="outlined-with-placeholder"
          margin="normal"
          variant="outlined"
          value={updatedApp.hosted_url}
          name="hosted_url"
          label="hosted_url"
          onChange={e => {
            handleChanges(e)
          }}
          onBlur={e => isUrlValid(updatedApp.hosted_url, updatedApp, setUpdatedApp, "error_message_hosted")}
          helperText={updatedApp.error_message_hosted && updatedApp.error_message_hosted}
        />
        {/* <TextField
          className="submitInput"
          value={tags}
          id="standard-select standard-required"
          required
          select
          variant="outlined"
          label="tags"
          inputProps={{ "data-testid": "tags" }}
          name="tags"
          helperText="Please select one"
          margin="normal"
          onChange={e =>
            setUpdatedApp({
              ...updatedApp,
              tags: e.target.value,
            })
          }
        >
          {tags &&
            tags.map(tag => (
              <MenuItem value={tag} key={tag.tag_name}>
                {tag.tag_name}
              </MenuItem>
            ))}
        </TextField> */}
        <TextField
          className="submitInput"
          value={updatedApp.category}
          id="standard-select standard-required"
          required
          select
          variant="outlined"
          label="categories"
          inputProps={{ "data-testid": "categories" }}
          name="category"
          helperText="Please select one"
          margin="normal"
          onChange={e =>
            setUpdatedApp({
              ...updatedApp,
              category: e.target.value,
            })
          }
        >
          {categories &&
            categories.map(category => (
              <MenuItem defaultValue={updatedApp.category} value={category.category_name} key={category.category_name}>
                {category.category_name}
              </MenuItem>
            ))}
        </TextField>
      </div>
      <div className="app-edit-buttons">
        <Tooltip title="Approve" placement="top">
          <Button
            className="app-edit-button"
            size="small"
            color="primary"
            onClick={() => handleUpdateApp(updatedApp, updatedApp.id)}
          >
            <i class="fas fa-check-circle fa-2x"></i>
          </Button>
        </Tooltip>
        <Tooltip title="Deny" placement="top">
          <Button
            className="app-edit-button"
            size="small"
            color="secondary"
            onClick={() => setIsOpen(!isModalOpen)}
          >
            <i class="fas fa-times-circle fa-2x"></i>
          </Button>
        </Tooltip>
      </div>
    </main>
  )
}

const mapStateToProps = ({ usersReducer, appsReducer }) => {
  return {
    ...usersReducer,
    ...appsReducer,
  }
}

export default connect(
  mapStateToProps,
  { updateApp }
)(AppEditContent)

import React, { useState } from "react"
import { connect } from "react-redux"
import Button from "@material-ui/core/Button"
import Tooltip from "@material-ui/core/Tooltip"
import MenuItem from "@mateiral-ui/core/MenuItem"
import TextField from "@material-ui/core/TextField"
import { updateApp } from "../../actions"

const AppContent = ({ user, app }) => {
  const { id } = user
  const {
    display_image,
    name,
    description,
    frontend_url,
    backend_url,
    hosted_url,
    category,
    is_approved,
  } = app

  const [updatedApp, setUpdatedApp] = useState({
    display_image,
    name,
    description,
    frontend_url,
    backend_url,
    hosted_url,
    category,
  })

  function handleUpdateApp(change, id) {
    updateApp(change, id).then(res => {
      window.location.reload()
    })
  }

  const handleChanges = e => {
    setUpdatedApp({ ...updatedApp, [e.target.name]: e.target.value })
  }

  return (
    <main className="app-edit-content">
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
          id="outlined-with-placeholder"
          margin="normal"
          variant="outlined"
          value={updatedApp.frontend_url}
          name="frontend_url"
          label="frontend_url"
          onChange={e => {
            handleChanges(e)
          }}
        />
        <TextField
          id="outlined-with-placeholder"
          margin="normal"
          variant="outlined"
          value={updatedApp.backend_url}
          name="backend_url"
          label="backend_url"
          onChange={e => {
            handleChanges(e)
          }}
        />
        <TextField
          id="outlined-with-placeholder"
          margin="normal"
          variant="outlined"
          value={updatedApp.hosted_url}
          name="hosted_url"
          label="hosted_url"
          onChange={e => {
            handleChanges(e)
          }}
        />
        <TextField
          id="outlined-with-placeholder"
          margin="normal"
          variant="outlined"
          value={updatedApp.hosted_url}
          name="hosted_url"
          label="hosted_url"
          onChange={e => {
            handleChanges(e)
          }}
        />
        <TextField
          className="submitInput"
          value={category}
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
            handleChanges({
              ...updatedApp,
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
        <p>{description}</p>
      </div>
      <div className="app-edit-buttons">
        <Tooltip title="Approve" placement="top">
          <Button
            className="app-edit-button"
            size="small"
            color="primary"
            onClick={() => handleUpdateApp(updatedApp, id)}
          >
            <i class="fas fa-check-circle fa-2x"></i>
          </Button>
        </Tooltip>
        <Tooltip title="Approve" placement="top">
          <Button
            className="app-edit-button"
            size="small"
            color="primary"
            onClick={() => handleUpdateApp(updatedApp, id)}
          >
            <i class="fas fa-check-circle fa-2x"></i>
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
  {}
)(AppContent)

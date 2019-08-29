import React, { useEffect } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"

import { getAppById } from "../../actions"

import Paper from "@material-ui/core/Paper"
import { Container } from "@material-ui/core"

const AppPage = ({ getAppById, match, app }) => {
  const { name, description, display_image, category, tags, users } = app
  useEffect(() => {
    getAppById(parseInt(match.params.id, 10))
  }, [])

  return (
    <Container>
      <div className="app-page-top">
        <div className="display-info">
          <h2>{name}</h2>
          <div>
            <img
              className="app-screenshot"
              src={display_image}
              alt="App screenshot"
            />
          </div>
        </div>
        <Paper className="app-description">
          <p>{description}</p>
        </Paper>
      </div>

      <div className="category-tags">
        {category ? (
          <div className="category-card">
            <p>Category: </p>
            {category.map(currentCategory => (
              <h3 className="app-category" key={currentCategory.id}>
                {currentCategory.category_name}
              </h3>
            ))}
          </div>
        ) : (
          <h3>Loading category...</h3>
        )}
        {tags ? (
          <div className="app-tags">
            {tags.map(currentTag => (
              <p className="app-tag" key={currentTag.id}>
                {currentTag.tag_name}
              </p>
            ))}
          </div>
        ) : (
          <h3>Loading tags...</h3>
        )}
      </div>

      {users ? (
        <div className="users-section">
          <p className="users-heading">Meet the team</p>
          <div className="app-users">
            {users.map(user => (
              <div className="user-card" key={user.id}>
                <p>
                  {user.first_name} {user.last_name}
                </p>
                <div>
                  <img
                    className="profile-img"
                    src={user.pictureURL}
                    alt="profile"
                  />
                </div>
                <p>{user.username}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>Loading contributors...</p>
      )}
    </Container>
  )
}

const mapStateToProps = ({ appsReducer }) => {
  return {
    app: appsReducer.app,
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    { getAppById }
  )(AppPage)
)

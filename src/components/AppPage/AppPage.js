import React, { useEffect } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import { getAppById } from "../../actions"
import { Container } from "@material-ui/core"
import Paper from "@material-ui/core/Paper"

const AppPage = ({ getAppById, match, app }) => {
  const { name, description, display_image, category, tags, users } = app

  useEffect(() => {
    getAppById(parseInt(match.params.id, 10))
  }, [getAppById, match.params.id])

  return (
    <Container>
      <div className="app-page-top">
        <div className="app-page-header">
          <h2>{name}</h2>
          <div className="category-wrap">
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
          </div>
        </div>
        <div className="display-info">
          <div>
            <img
              className="app-screenshot"
              src={display_image}
              alt="App screenshot"
            />
          </div>
          <div className="app-description">
            <p>{description}</p>
            <div className="description-border"></div>
          </div>
        </div>
      </div>

      <div className="tags-wrap">

        {tags ? (
          <div className="app-tags">
            <h3> Tech Stack: </h3>
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

      <div className="team-wrap">
        {users ? (
          <div className="users-section">
            <h3 className="users-heading">Meet the team</h3>
            <div className="app-users">
              {users.map(user => (
                <div className="user-card" key={user.id}>
                  <Paper className="team-container">
                    <div>
                      <img
                        className="profile-img"
                        src={user.pictureURL}
                        alt="profile"
                      />
                    </div>
                    <p className="names">{user.first_name} {user.last_name}</p>
                    <span className="username">{user.username}</span>
                  </Paper>
                </div>
              ))}
            </div>
          </div>
        ) : (
            <p>Loading contributors...</p>
          )}
      </div>
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

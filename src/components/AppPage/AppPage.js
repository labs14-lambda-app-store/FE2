import React, { useEffect } from "react"
import { connect } from "react-redux"
import { Container } from "@material-ui/core"
import { getAppById } from "../../actions"
import { withRouter } from "react-router"

const AppPage = ({ getAppById, match, app }) => {
  const {
    id,
    name,
    description,
    frontend_url,
    backend_url,
    hosted_url,
    display_image,
    category,
    tags,
    users,
  } = app
  useEffect(() => {
    getAppById(parseInt(match.params.id, 10))
  }, [])

  console.log("app:", app)

  return (
    <Container>
      <h2>{name}</h2>
      <div>
        <img src={display_image} alt="App screenshot" />
      </div>
      <h3>{category}</h3>
      <p>{description}</p>
      {tags ? (
        <div>
          {tags.map(currentTag => (
            <p key={currentTag.id}>{currentTag.tag_name}</p>
          ))}
        </div>
      ) : (
        <h3>Loading tags...</h3>
      )}

      <h3>{hosted_url}</h3>
      <h3>{frontend_url}</h3>
      <h3>{backend_url}</h3>

      {users ? (
        <div className="userDiv">
          {users.map(user => (
            <div key={user.id}>
              <h4>user.name</h4>
            </div>
          ))}
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

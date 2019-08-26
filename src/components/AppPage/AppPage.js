import React, { useEffect } from "react"
import { Container } from "@material-ui/core"

const AppPage = props => {
  const {
    name,
    description,
    frontend_url,
    backend_url,
    hosted_url,
    display_image,
    category,
    tags,
    users,
  } = props

  return (
    <Container>
      <div className="title-card">
        <h2>App name!</h2>
        <h2>{name}</h2>
        <div>
          <p>here there be images</p>
          <img src={display_image} alt="A[[ screenshot" />
        </div>
      </div>

      <div>
        <h3>this is a category</h3>
        <h3>{category}</h3>
        <br />
        <p>This is where the description goes.</p>
        <p>{description}</p>
      </div>

      <div>
        {tags.map(tag => {
          ;<p>tag name</p>
        })}
      </div>

      <div className="url-section">
        <h3>hosted_url</h3>
        <h3>{hosted_url}</h3>
        <h3>frontend_url</h3>
        <h3>{frontend_url}</h3>
        <h3>backend_url</h3>
        <h3>{backend_url}</h3>
      </div>

      <div>
        {users.map(user => {
          ;<div>userDiv</div>
        })}
      </div>
    </Container>
  )
}

export default AppPage

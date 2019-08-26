import React, { useEffect } from "react"

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
    <div>
      <h1>This is an App page</h1>
    </div>
  )
}

export default AppPage

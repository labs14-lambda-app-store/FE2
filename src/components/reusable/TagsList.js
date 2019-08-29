import React from "react"

import Chip from "@material-ui/core/Chip"

const TagsList = props => {
  const { app } = props
  return (
    <div className="tags">
      {app.tags &&
        app.tags.map(tag => {
          return (
            <Chip
              className="chip"
              variant="outlined"
              color="primary"
              key={tag.tag_name}
              label={tag.tag_name}
              style={{ margin: "2px .5rem 2px 0" }}
            />
          )
        })}
    </div>
  )
}

export default TagsList

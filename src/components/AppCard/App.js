import React, { useState } from "react"

import AppModal from "./AppModal"

import Card from "@material-ui/core/Card"
import Button from "@material-ui/core/Button"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"

const App = ({ app }) => {
  const { display_image, name, description, category, is_approved } = app

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Card>
        <CardMedia
          // keeps the pictures all uniform size!
          style={{ height: 0, paddingTop: "56.25%" }}
          image={display_image}
          title={name}
          onClick={() => setIsOpen(true)}
        />
        <CardContent>
          <div onClick={() => setIsOpen(true)}>
            <Typography gutterBottom varient="heading" component="h3">
              {name}
            </Typography>

            <Typography
              className="categoryName"
              color="secondary"
              component="h1"
            >
              {category && category[0].category_name.toUpperCase()}
            </Typography>

            <Typography component="p">{description}</Typography>
          </div>
          <AppModal app={app} isModalOpen={isOpen} setIsOpen={setIsOpen} />
        </CardContent>
        <CardActions>
          <Button
            className="getAppButton"
            size="small"
            color="primary"
            onClick={() => setIsOpen(true)}
          >
            {is_approved ? "View The App" : "Review The App"}
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default App

import React, { useState } from "react"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import PendingModal from "./PendingModal"

const PendingProject = props => {
  const { project } = props
  const { display_image, name, description, hosted_url } = project

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      {props.project ? (
        <Card>
          <CardMedia
            // keeps the pictures all uniform size!
            style={{ height: 0, paddingTop: "56.25%" }}
            image={display_image}
            title={name}
          />
          <CardContent>
            {/* <Typography className="app-title" gutterBottom varient="heading" component="h3">{name}</Typography> */}
            <Typography gutterBottom varient="heading" component="h3">
              {name}
            </Typography>
            {/* <Typography className="description-box" component="p">{description}</Typography> */}
            <Typography component="p">{description}</Typography>
            <PendingModal
              project={project}
              isModalOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          </CardContent>
          <CardActions>
            {/* target so when you click the button, it opens the app in a new browser tab */}

            <Button
              className="getAppButton"
              size="small"
              color="primary"
              onClick={() => setIsOpen(true)}
            >
              Review the App
            </Button>
          </CardActions>
        </Card>
      ) : null}
    </div>
  )
}

export default PendingProject

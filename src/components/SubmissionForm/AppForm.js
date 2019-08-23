import React, { useState } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import Confirm from "./Confirm"
import AppDetails from "./AppDetails"

import { addApp, getApprovedApps, sendImageToCloudinary } from "../../actions"

var moment = require("moment")

const AppForm = ({ project_image, history, addApp, user_id }) => {
  const [step, setStep] = useState(1)

  const [state, setStateValues] = useState({
    hosted_url: "",
    frontend_url: "",
    backend_url: "",
    name: "",
    description: "",
    submitted_at: "",
    display_image: "",
    category: "",
    // tags: "",
    error_message: "",
  })

  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const handleStateChanges = e => {
    setStateValues({ ...state, [e.target.name]: e.target.value })
  }

  //proceed to next step
  const nextStep = () => {
    setStep(step + 1)
  }

  //go back to previous step
  const prevStep = () => {
    setStep(step - 1)
  }

  //post new app to database
  const handlePost = async e => {
    e.preventDefault()

    let submitted_at = moment().format("MMMM Do YYYY, h:mm:ss a")
    let display_image = project_image && project_image
    let newPost = {
      //send all of state to BE except category_name and error_message (will return a 500 if you include these)
      hosted_url: state.hosted_url,
      frontend_url: state.frontend_url,
      backend_url: state.backend_url,
      name: state.name,
      category_id: state.category.id,
      description: state.description,
      // error_message: state.error_message,
      submitted_at,
      display_image,
      user_id /* This does not save to the app object, gets extracted on the backend to allow for multiple users to be added to each app */,
    }

    addApp(newPost, history).then(res => setIsPopupOpen(true))
  }

  //switch and steps to confirm submission details
  switch (step) {
    case 1:
      return (
        <AppDetails
          nextStep={nextStep}
          state={state}
          handleStateChanges={handleStateChanges}
          setStateValues={setStateValues}
        />
      )
    case 2:
      return (
        <Confirm
          nextStep={nextStep}
          prevStep={prevStep}
          handlePost={handlePost}
          state={state}
          isPopupOpen={isPopupOpen}
        />
      )
    default:
      return null
  }
}

const mapStateToProps = ({ imagesReducer, usersReducer }) => {
  return {
    project_image: imagesReducer.image,
    user_id: usersReducer.user.id,
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    { getApprovedApps, addApp, sendImageToCloudinary }
  )(AppForm)
)

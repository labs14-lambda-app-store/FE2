import React, { useState } from "react"
import { connect } from "react-redux"

import Confirm from "./Confirm"
import Success from "./Success"
import ProtectedRoute from "../Auth/ProtectedRoute"
import AppDetails from "./AppDetails"
import { addApp, getApprovedApps, sendImageToCloudinary } from "../../actions"

var moment = require("moment")

const AppForm = props => {
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
  const handlePost = e => {
    e.preventDefault()

    let submitted_at = moment().format("MMMM Do YYYY, h:mm:ss a")
    let display_image = props.display_image && props.display_image
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
    }

    props.addApp(newPost).then(res => {
      getApprovedApps()
    })
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
        />
      )
    case 3:
      return <Success />
    default:
      return null
  }
}

const mapStateToProps = ({ appsReducer, imagesReducer }) => {
  return {
    ...appsReducer,
    display_image: imagesReducer.image,
  }
}


export default connect(
  mapStateToProps,
  { getApprovedApps, addApp, sendImageToCloudinary }
)(AppForm)

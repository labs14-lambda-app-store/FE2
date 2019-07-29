import React, { useState } from "react"

import Confirm from "./Confirm"
import Success from "./Success"
import ProjectDetails from "./ProjectDetails"
import { connect } from "react-redux"
import { addProject, getProjects } from "../../actions"

var moment = require("moment")

const ProjectForm = props => {
  const [step, setStep] = useState(1)

  const [state, setStateValues] = useState({
    hosted_url: "",
    frontend_url: "",
    backend_url: "",
    name: "",
    category_name: "",
    description: "",
    submitted_at: "",
    display_image: "",
    tags: "",
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

  //post new project to database
  const handlePost = e => {
    e.preventDefault()

    let submittedAt = moment()

    let newPost = {
      ...state,
    }

    props.addProject(newPost).then(res => {
      getProjects()
    })
  }

  //switch and steps to confirm submission details
  switch (step) {
    case 1:
      return (
        <ProjectDetails
          nextStep={nextStep}
          state={state}
          handleStateChanges={handleStateChanges}
        />
      )
    case 2:
      return (
        <Confirm
          nextStep={nextStep}
          prevStep={prevStep}
          handlePost={handlePost}
          values={state}
        />
      )
    case 3:
      return <Success />
    default:
      return null
  }
}

const mapStateToProps = ({ projectsReducer }) => {
  return {
    ...projectsReducer,
  }
}

export default connect(
  mapStateToProps,
  { getProjects, addProject }
)(ProjectForm)

import React, { useState, useEffect } from "react"

import Confirm from "./Confirm"
import Success from "./Success"
import ProjectDetails from "./ProjectDetails"
import axios from "axios"
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

  const setSubmittedAt = date => {
    setStateValues({...state, submitted_at: date})
  }

  const handleStateChanges = e => {
    setStateValues({ ...state, [e.target.name]: e.target.value })
  }

  //gets random image from unsplash api and sets it as the display_image
  //for temporary placeholders
  const getRandomPlaceholderImg = async () => {
    await axios
      .get("https://source.unsplash.com/1600x900/?nature,water,animal")
      .then(res => {
        setStateValues({ ...state, display_image: res.config.url })
      })
  }

  useEffect(() => {
    getRandomPlaceholderImg()
    //eslint-disable-next-line
  }, [])

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
    
    let submittedAt = moment().format('MMMM Do YYYY, h:mm:ss a');
    setSubmittedAt(submittedAt)

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

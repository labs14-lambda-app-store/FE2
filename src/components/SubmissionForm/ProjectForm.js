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
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [hosted_url, setHostedUrl] = useState("")
  const [frontend_url, setFrontendUrl] = useState("")
  const [backend_url, setBackendUrl] = useState("")
  const [category_name, setCategory] = useState("")
  const [submitted_at, setSubmit] = useState("")
  const [display_image, setImage] = useState("")
  const [tags, setTags] = useState("")

  //gets random image from unsplash api and sets it as the display_image
  //for temporary placeholders
  const getRandomPlaceholderImg = async () => {
    await axios
      .get("https://source.unsplash.com/1600x900/?nature,water,animal")
      .then(res => {
        setImage(res.config.url)
      })
  }

  useEffect(() => {
    getRandomPlaceholderImg()
  }, [])

  const functions = {
    setName,
    setDescription,
    setHostedUrl,
    setFrontendUrl,
    setBackendUrl,
    setCategory,
    setSubmit,
    setImage,
    setTags,
  }

  const values = {
    name,
    description,
    hosted_url,
    frontend_url,
    backend_url,
    category_name,
    submitted_at,
    display_image,
    tags,
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
      name,
      description,
      hosted_url,
      frontend_url,
      backend_url,
      category_name,
      submitted_at: submittedAt,
      display_image,
      tags,
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
          functions={functions}
          values={values}
        />
      )
    case 2:
      return (
        <Confirm
          nextStep={nextStep}
          prevStep={prevStep}
          handlePost={handlePost}
          values={values}
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

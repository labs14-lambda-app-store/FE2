import React, { useState, useEffect } from "react";
import axios from "axios";

import Confirm from './Confirm';
import Success from './Success';
import ProjectDetails from './ProjectDetails';

const ProjectForm = props => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [hosted_url, setHostedUrl] = useState("");
  const [frontend_url, setFrontendUrl] = useState("");
  const [backend_url, setBackendUrl] = useState("");
  const [category_id, setCategory] = useState("");
  const [submitted_at, setSubmit] = useState("");
  const [display_image, setImage] = useState("");
  const [tags, setTags] = useState("");

  const functions = {
        setName,
        setDescription,
        setHostedUrl,
        setFrontendUrl,
        setBackendUrl,
        setCategory,
        setSubmit,
        setImage,
        setTags
  }

  const values = {
        name, 
        description,
        hosted_url,
        frontend_url,
        backend_url,
        category_id,
        submitted_at,
        display_image,
        tags
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
    e.preventDefault();

    let newPost = {
      name,
      description,
      hosted_url,
      frontend_url,
      backend_url,
      category_id,
      submitted_at,
      display_image,
      tags
    };

    axios
      .post(`https://lambdaappstore2.herokuapp.com/api/projects`, newPost)
      .then(res => console.log(res.status))
      .catch(err => console.log(err.message));
  };

  //switch and steps to confirm submission details
  switch(step) {
        case 1:
            return(
                  <ProjectDetails 
                  nextStep={nextStep}
                  functions={functions}
                  values={values}
                  />
            )
        case 2:
            return(
                  <Confirm 
                  nextStep={nextStep}
                  prevStep={prevStep}
                  handlePost={handlePost}
                  values={values}
                  />
            )
        case 3:
            return(
                  <Success 
                  />
            )
  }


};
export default ProjectForm;

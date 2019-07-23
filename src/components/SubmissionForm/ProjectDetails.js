import React, { useState, useEffect } from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const ProjectDetails = (props) => {
  const { nextStep, values, functions } = props;
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [hosted_url, setHostedUrl] = useState("");
//   const [frontend_url, setFrontendUrl] = useState("");
//   const [backend_url, setBackendUrl] = useState("");
//   const [category_id, setCategory] = useState("");
//   const [submitted_at, setSubmit] = useState("");
//   const [display_image, setImage] = useState("");
//   const [tags, setTags] = useState("");

  const Continue = e => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div>
      
      <h2>this will be a form</h2>
      <form>
        <TextField
          type="text"
          value={values.name} /*???*/
          placeholder="project name..."
          required="true"
          onChange={e => functions.setName(e.target.value)}
        />
        <br />
        <TextField
          type="text"
          value={values.category_id} /*???*/
          placeholder="category..."
          required="true"
          onChange={e => functions.setCategory(e.target.value)}
        />
        <br />
        <TextField
          type="text"
          value={values.description} /*???*/
          placeholder="project description..."
          required="true"
          onChange={e => functions.setDescription(e.target.value)}
        />
        <br />
        <TextField
          type="text"
          value={values.hosted_url} /*???*/
          placeholder="hosted url..."
          required="true"
          onChange={e => functions.setHostedUrl(e.target.value)}
        />
        <br />
        <TextField
          type="text"
          value={values.frontend_url} /*???*/
          placeholder="frontend url..."
          onChange={e => functions.setFrontendUrl(e.target.value)}
        />
        <br />
        <TextField
          type="text"
          value={values.backend_url} /*???*/
          placeholder="backend url..."
          onChange={e => functions.setBackendUrl(e.target.value)}
        />
        <br />
        <TextField
          type="text"
          value={values.submitted_at} /*???*/
          placeholder="submitted at..."
          onChange={e => functions.setSubmit(e.target.value)}
        />
        <br />
        <TextField
          type="text"
          value={values.display_image} /*???*/
          placeholder="display image..."
          onChange={e => functions.setImage(e.target.value)}
        />
        <br />
        <TextField
          type="text"
          value={values.tags} /*???*/
          placeholder="tags..."
          onChange={e => functions.setTags(e.target.value)}
        />
        <br />
        <Button
          label="Continue"
          type="submit"
          color="primary"
          onClick={e => Continue(e)}>
            Continue
        </Button>
      </form>
    </div>
  );
};

export default ProjectDetails;

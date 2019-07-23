import React, { useState, useEffect } from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const ProjectDetails = (props) => {
  const { nextStep, values, functions } = props;

  // const getCategories = e => {

  // };
//get category list from backend to pass into category dropdown menu ? or hardcode it...
  
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
          value={values.category_id} /*???*/
          id="standard-select-currency"
          select
          label="Select Category"
          onChange={e => functions.setCategory(e.target.value)}
        />
        <br />
        <TextField
          type="text"
          value={values.description} /*???*/
          placeholder="project description..."
          required
          onChange={e => functions.setDescription(e.target.value)}
        />
        <br />
        <TextField
          type="text"
          value={values.hosted_url} /*???*/
          placeholder="hosted url..."
          required
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

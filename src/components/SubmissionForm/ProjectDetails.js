import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from '@material-ui/core/MenuItem';
import Button from "@material-ui/core/Button";
import axios from "axios";

const ProjectDetails = props => {
  const { nextStep, values, functions } = props;

  // const getCategories = e => {
  //   axios
  //     .get(`https://lambdaappstore2.herokuapp.com/api/categories`)
  //     .then(res => console.log(res.status))
  //     .catch(err => console.log(err.message))
  // };
  //get category list from backend to pass into category dropdown menu ? or hardcode it...
  const categories = [
    { category_name: "Business" },
    { category_name: "Entertainment" },
    { category_name: "Education" },
    { category_name: "Games" },
    { category_name: "Music" },
    { category_name: "Medical" },
    { category_name: "Health & Fitness" },
    { category_name: "Food & Drink" },
    { category_name: "Finance" },
    { category_name: "Books" },
    { category_name: "Social Networking" },
    { category_name: "Shopping" },
    { category_name: "Photo & Video" },
    { category_name: "News" },
    { category_name: "Navigation" },
    { category_name: "Sports" },
    { category_name: "Travel" },
    { category_name: "Weather" }
  ];

  

  const Continue = e => {
    e.preventDefault();
    nextStep();
  };

  const sortCategories = categories.sort(function(a,b){
    if(a.category_name < b.category_name ) {return -1}
    if(a.category_name > b.category_name ) {return 1}
    return 0;
  })
  // categories.sort()
  //  console.log(categories.sort()).

  return (
    <div>
      <h2>this is a form</h2>
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
          label="app category"
          helperText="Please select primary category"
          margin="normal"
          onChange={e => functions.setCategory(e.target.value)}>
            {sortCategories.map(category => (
              <MenuItem key={category.id} value={category.category_name}>
              {category.category_name}
            </MenuItem>
            ))}
          </TextField>
        
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
          onClick={e => Continue(e)}
        >
          Continue
        </Button>
      </form>
    </div>
  );
};

export default ProjectDetails;

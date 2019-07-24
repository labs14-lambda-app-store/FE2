import React from 'react';
import TextField from "@material-ui/core/TextField";
import MenuItem from '@material-ui/core/MenuItem';
import Button from "@material-ui/core/Button";
//imported Material UI packages above,
// and implemented them in a functional component below

const ProjectDetails = props => {
  const { nextStep, values, functions } = props;

  //hardcoded because the backend end point was an empty array
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

  //sort categories alphabetically
  const sortCategories = categories.sort(function(a,b){
    if(a.category_name < b.category_name ) {return -1}
    if(a.category_name > b.category_name ) {return 1}
    return 0;
  })

  return (
    <div>
      <h2>App Submission Form</h2>
      <form>
        <TextField
          type="text"
          value={values.name} /*???*/
          required
          id="standard-required"
          placeholder="name..."
          margin="normal"
          onChange={e => functions.setName(e.target.value)}
        />
        <br />
        <TextField
          value={values.category_name} /*???*/
          id="standard-select standard-required"
          required
          select
          label="categories"
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
          required
          id="standard-required"
          placeholder="description..."
          margin="normal"
          onChange={e => functions.setDescription(e.target.value)}
        />
        <br />
        <TextField
          type="text"
          value={values.hosted_url} /*???*/
          required
          id="standard-required"
          placeholder="Hosted URL..."
          margin="normal"
          onChange={e => functions.setHostedUrl(e.target.value)}
        />
        <br />
        <TextField
          type="text"
          value={values.frontend_url} /*???*/
          placeholder="frontend url..."
          margin="normal"
          onChange={e => functions.setFrontendUrl(e.target.value)}
        />
        <br />
        <TextField
          type="text"
          value={values.backend_url} /*???*/
          placeholder="backend url..."
          margin="normal"
          onChange={e => functions.setBackendUrl(e.target.value)}
        />
        <br />
        <TextField
          type="text"
          value={values.submitted_at} /*???*/
          placeholder="submitted at..."
          margin="normal"
          onChange={e => functions.setSubmit(e.target.value)}
        />
        <br />
        <TextField
          type="text"
          value={values.display_image} /*???*/
          placeholder="display image..."
          required
          margin="normal"
          onChange={e => functions.setImage(e.target.value)}
        />
        <br />
        <TextField
          type="text"
          value={values.tags} /*???*/
          placeholder="tags..."
          margin="normal"
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

import React, { useState, useEffect } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

const Confirm = props => {
      const { nextStep, prevStep, handlePost, values } = props

      const Continue = e => {
            e.preventDefault()
            handlePost()
            nextStep()
      };

      const Back = e => {
            e.preventDefault()
            prevStep()
      };

      
      return (
            <div>
                  
                  <h1> Confirm Submission Data </h1>
                  <List>
                        <ListItem button><ListItemText primary='Name' secondary={values.name}/></ListItem> 
                        <ListItem button><ListItemText primary='Description' secondary={values.description} /></ListItem> 
                        <ListItem button><ListItemText primary='Hosted URL' secondary={values.hosted_url} /></ListItem>
                        <ListItem button><ListItemText primary='Front-End URL' secondary={values.frontend_url} /></ListItem>
                        <ListItem button><ListItemText primary='Back-End URL' secondary={values.backend_url} /></ListItem>
                        <ListItem button><ListItemText primary='Category' secondary={values.category_id} /></ListItem>
                        <ListItem button><ListItemText primary='Tags' secondary={values.tags} /></ListItem>
                  </List>
                  <br/>
                  <Button label="Confirm & Continue" color="primary" onClick={e => Continue(e)}>
                  Confirm & Continue
                  </Button>
                  <Button label="Back" color="secondary" onClick={e => Back(e)}>
                  Back
                  </Button>
                  
            </div>
      )

}

export default Confirm;
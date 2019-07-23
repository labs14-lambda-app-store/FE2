import React, { useState, useEffect } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';

const Confirm = props => {
      const { nextStep, prevStep, handlePost, values } = props
      const Continue = e => {
            e.preventDefault();
            handlePost();
            nextStep();
      };

      const Back = e => {
            e.preventDefault();
            prevStep();
      }

      
      return (
            <div>
                  <>
                  <h1> Confirm Submission Data </h1>
                  <List>
                        <ListItem primaryText='Name' secondardText={values.name} />
                        <ListItem primaryText='Description' secondardText={values.description} />
                        <ListItem primaryText='Hosted URL' secondardText={values.hosted_url} />
                        <ListItem primaryText='Front-End URL' secondardText={values.frontend_url} />
                        <ListItem primaryText='Back-End URL' secondardText={values.backend_url} />
                        <ListItem primaryText='Category' secondardText={values.category_id} />
                        <ListItem primaryText='Tags' secondardText={values.tags} />
                  </List>
                  <br/>
                  <Button label="Confirm & Continue" color="primary" onClick={Continue}>
                  Confirm & Continue
                  </Button>
                  <Button label="Back" color="secondary" onClick={Back}>
                  Back
                  </Button>
                  </>
            </div>
      )

}

export default Confirm;
import React, { useState, useEffect } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';

const Confirm = props => {
      const { nextStep, prevStep, handlePost } = this.props
      const Continue = e => {
            e.preventDefault();
            handlePost();
            nextStep();
      };

      const Back = e => {
            e.preventDefault();
            prevStep();
      }

      const { name,
            description,
            hosted_url,
            frontend_url,
            backend_url,
            category_id,
            tags } = this.props;
      
      return (
            <div>
                  <>
                  <h1> Confirm Submission Data </h1>
                  <List>
                        <ListItem primaryText='Name' secondardText={name} />
                        <ListItem primaryText='Description' secondardText={description} />
                        <ListItem primaryText='Hosted URL' secondardText={hosted_url} />
                        <ListItem primaryText='Front-End URL' secondardText={frontend_url} />
                        <ListItem primaryText='Back-End URL' secondardText={backend_url} />
                        <ListItem primaryText='Category' secondardText={category_id} />
                        <ListItem primaryText='Tags' secondardText={tags} />
                  </List>
                  <br/>
                  <Button label="Confirm & Continue" color="primary" onClick={Continue()}>

                  </Button>
                  <Button label="Back" color="secondary" onClick={Back()}>

                  </Button>
                  </>
            </div>
      )

}

export default Confirm;
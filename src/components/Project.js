import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Project = (props) => {
      return (
            <div>
                  { props.project ? (
                        <Card>
                              <CardMedia style={{height: 0, paddingTop: '56.25%'}}
                                    image={props.project.display_image}
                                    title={props.project.name}
                              />
                              <CardContent>
                                    <Typography gutterBottom varient='heading' component='h3'>
                                          {props.project.name}
                                    </Typography>
                                    <Typography component="p">
                                          {props.project.description}
                                    </Typography>
                              </CardContent>
                              <CardActions>
                                    {/* target so when you click the button, it opens the app in a new browser tab */}
                                    <Button size="small" color="primary" href={props.project.hosted_url} target='_blank'>
                                          Get App
                                    </Button>
                              </CardActions>
                        </Card>
                  ): null }
            </div>
      )
}

export default Project;


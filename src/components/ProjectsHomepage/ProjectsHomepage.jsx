import React from 'react';
import { Grid, Row, Col } from "react-bootstrap";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import CardNoFooter from "components/Card/CardNoFooter.jsx";



const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },

  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },

  card: {
    marginBottom: '1em'
  }

});

export class ProjectsHomepage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <CardNoFooter
        title="Recent Projects"
        ctAllIcons
        category={
          <span>
            A short list of my most recent development efforts
          </span>
        }
        content={
          this.props.tabs.map(function(tab, i){
            return (
                <Row>
                  {tab.items.map(function(item, i){
                    return (
                      <Col md={4} key={i}>
                        <Card  className={classes.card}>
                          <CardMedia
                            className={classes.media}
                            image={item.img}
                            title={item.name}
                          />
                          <CardContent>
                            <Typography gutterBottom variant="headline" component="h2" className={classes.title}>
                              {item.name}
                            </Typography>
                            <Typography component="h5" className={classes.text}>
                              {item.desc}
                            </Typography>
                          </CardContent>
                          <CardActions>
                            {item.buttonText1
                              ? <Button size="small" color="primary" onClick={() => window.open(item.buttonLink1)}>
                                <span className={classes.text}>{item.buttonText1}</span>
                              </Button>
                              : null
                            }
                            {item.buttonText2
                              ? <Button size="small" color="primary" onClick={() => window.open(item.buttonLink2)}>
                                <span className={classes.text}>{item.buttonText2}</span>
                              </Button>
                              : null
                            }
                          </CardActions>
                        </Card>
                      </Col>
                    );
                  })}
                </Row>
            );
          })
        }
      />
    );
  }
}



ProjectsHomepage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectsHomepage);

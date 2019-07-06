import React from 'react';
import { Row, Col } from "react-bootstrap";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
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
    marginBottom: '1em',
    minHeight: '275px'
  }
});

export class ProjectsHomepage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <CardNoFooter
        title={this.props.tabs[0].tabname ? this.props.tabs[0].tabname : null}
        ctAllIcons
        category={
          <span>
            {this.props.tabs[0].subtitle ? this.props.tabs[0].subtitle : null}
          </span>
        }
        moreLink={this.props.moreLink}
        content={
          this.props.tabs.map(function(tab, i){
            return (
                <Row key={i}>
                  {tab.items.map(function(item, i){
                    return (
                      <Col md={3} key={i}>
                        <Card  className={classes.card}>
                          <a href={item.buttonLink1}>
                            <CardMedia
                              className={classes.media}
                              image={item.img}
                              title={item.name}
                            />
                          </a>
                          <CardContent>
                            <Typography gutterBottom variant="headline" component="h2" className={classes.title}>
                              {item.name}
                            </Typography>
                            <Typography component="h5" className={classes.text} style={{fontSize: '1rem'}}>
                              {item.desc}
                            </Typography>
                          </CardContent>
                          <CardActions>
                            <div style={{position: 'absolute', bottom: '20px'}}>
                              {item.buttonText1
                                ? <Button size="small" color="primary" onClick={() => window.open(item.buttonLink1)}>
                                    <span className={classes.text} style={{fontSize: '1rem'}}>{item.buttonText1}</span>
                                  </Button>
                                : null
                              }
                              {item.buttonText2
                                ? <Button size="small" color="primary" onClick={() => window.open(item.buttonLink2)}>
                                    <span className={classes.text} style={{fontSize: '1rem'}}>{item.buttonText2}</span>
                                  </Button>
                                : null
                              }
                            </div>
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

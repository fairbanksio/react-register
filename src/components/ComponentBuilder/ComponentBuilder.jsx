import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from "react-bootstrap";
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { UnorderedListCard } from "components/UnorderedListCard/UnorderedListCard.jsx";
import { GitHubRepos } from "components/HomepageIcons/GitHubRepos/GitHubRepos.jsx";
import { DigitalOcean } from "components/HomepageIcons/DigitalOcean/DigitalOcean.jsx";
import { LinkedIn } from "components/HomepageIcons/LinkedIn/LinkedIn.jsx";
import { DockerPulls } from "components/HomepageIcons/DockerPulls/DockerPulls.jsx";
import { FullGallery } from "components/FullGallery/FullGallery.jsx";
import { GoogleMaps } from "components/Maps/Maps.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Links from "components/Links/Links";
import WorkExperience from "components/WorkExperience/WorkExperience";
import EducationInfo from "components/EducationInfo/EducationInfo";
import SkillsCard from "components/SkillsCard/SkillsCard";
import HighCharts from "components/HighCharts/HighCharts";
import Projects from "components/Projects/Projects";
import mdEditor from "components/mdEditor/mdEditor";
import JSONFormatter from "components/JSONFormatter/JSONFormatter";

var Components = {
    'Links': Links,
    'Github': {
      component: GitHubRepos,
      propDefs: [
        {name: "repo", type:"string"}
      ]
    },
    'Docker': {
      component: DockerPulls,
      propDefs: [
        {name: "username", type: "string"},
        {name: "corsproxy", type: "string"}
      ]
    },
    'LinkedIn': {
      component: LinkedIn,
      propDefs: [
        {name: "username", type: "string"}
      ]
    },
    'DigitalOcean': {
      component: DigitalOcean,
      propDefs: [
        {name: "doReferral", type: "string"}
      ]
    },
    'FullGallery': FullGallery,
    'UnorderedListCard': UnorderedListCard,
    'GoogleMaps': GoogleMaps,
    'UserCard': UserCard,
    'SkillsCard': SkillsCard,
    'WorkExperience': WorkExperience,
    'EducationInfo': EducationInfo,
    'HighCharts': HighCharts,
    'Projects': Projects,
    'mdEditor': {
      component: mdEditor,
      propDefs: [
        {name: "title", type: "string"},
        {name: "subtitle", type: "string"},
        {name: "layout", type: "string"},
        {name: "markdown", type: "string"}
      ]
    },
    'JSONFormatter': {
      component: JSONFormatter,
      propDefs: [
        {name: "title", type: "string"},
        {name: "subtitle", type: "string"},
        {name: "defaultIndent", type: "string"},
        {name: "sampleJSON", type: "string"}
      ]
    }
};

const availableComps = Object.entries(Components).map(([key,value])=>{
  return (
      key
  );
})

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});


export class PropForm extends React.Component {

  constructor() {
    super();
  }

  changeProp = event => {
    this.props.onChange(event);
  }

  render() {
    var component = this.props.component
    if(component){
      var componentProps = Components[component].propDefs;
      var formElements = componentProps.map(function(prop,key){
        return (
          <FormControl key={key}>
            <InputLabel htmlFor={prop.name}>{prop.name}</InputLabel>
            <Input
              onChange={this.changeProp}
              inputProps={{
                name: prop.name,
                id: prop.name,
              }}
            />
          </FormControl>

        );
      },this);
      return formElements

    } else {
      return "Please select a component to customize"
    }
  }

}



export class ComponentBuilder extends React.Component {

  constructor() {
    super();

    this.state = {
      components: [],
      currentComponent: {component: "", props: ""},
    };

     this.changeProp = this.changeProp.bind(this);
  }


  createComponent = (event, value) => {
    var newComponent = {component:this.state.currentComponent.component, props:this.state.currentComponent.props, col: { md: 3 }}
    this.setState(prevState => ({
      components: [...prevState.components, newComponent],
      currentComponent: {component: "", props: ""}
    }))
  };

  changeComponent = event => {
    var currentComponent = this.state.currentComponent
    currentComponent = { [event.target.name]: event.target.value };
    this.setState({currentComponent})

  };

  changeProp = event => {
    var currentComponent = this.state.currentComponent
    currentComponent.props = {...currentComponent.props, [event.target.name]: event.target.value };
    this.setState({currentComponent})


  };



  render() {
    const { classes } = this.props;

    return (
      <Row>
        <Col md={12}>

          <form className={classes.root} autoComplete="off">
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="component-select">Component</InputLabel>
              <Select
                value={this.state.currentComponent.component}
                onChange={this.changeComponent}
                inputProps={{
                  name: 'component',
                  id: 'component-select',
                }}
              >
                {availableComps.map(function(componentName, key){
                  return (
                    <MenuItem value={componentName} key={key}>{componentName}</MenuItem>
                  );
                })}

              </Select>
            </FormControl>




            <PropForm component={this.state.currentComponent.component} onChange={this.changeProp}/>






            <Button className={classes.root} size="small" color="primary" onClick={this.createComponent}>
              <span>Create Component</span>
            </Button>

          </form>



        </Col>
        <Col>
          <Row>
            {this.state.components.map(function(component, i){
              var Component = Components[component['component']].component
              return (
                <Col md={3} key={i}>
                    <Component {...component.props}/>
                </Col>
              );
            })}

          </Row>
        </Col>
      </Row>

    );
  }
}

ComponentBuilder.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(ComponentBuilder);

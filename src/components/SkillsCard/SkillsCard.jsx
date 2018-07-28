
import React, { Component } from "react";
import CardNoFooter from "components/Card/CardNoFooter.jsx";
import SkillBar from 'react-skillbars';


export class SkillsCard extends Component {
  render() {
    return (
      <CardNoFooter
        title={this.props.skillsTitle}
        category={this.props.skillsSubtitle}
        content={
          <SkillBar skills={this.props.skillsData} colors={this.props.skillsColors} animationDelay={20} offset={1000}/>
        }
      />
    );
  }
}

export default SkillsCard;

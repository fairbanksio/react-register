import React, { Component } from "react";
import SkillBar from 'react-skillbars';

export class SkillsCard extends Component {
  render() {
    return (
      <SkillBar skills={this.props.skillsData} colors={this.props.skillsColors} />
    );
  }
}

export default SkillsCard;

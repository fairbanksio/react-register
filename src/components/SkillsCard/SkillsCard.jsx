import React, { Component } from "react";
import SkillBar from 'react-skillbars';
import { skillsData, skillsColors } from 'variables/PortfolioConfig.jsx'

export class SkillsCard extends Component {
  render() {
    return (
      <SkillBar skills={skillsData} colors={skillsColors} />
    );
  }
}

export default SkillsCard;

import React, { Component } from "react";
import SkillBar from 'react-skillbars';
import { skillsData, skillsColors } from 'variables/PortfolioConfig.jsx'

export class SkillsCard extends Component {
  render() {
    return (
      <div>
        <SkillBar skills={skillsData} colors={skillsColors} />
        <br/>
      </div>
    );
  }
}

export default SkillsCard;

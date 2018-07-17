import React, { Component } from "react";
import SkillBar from 'react-skillbars';
import { skills } from 'variables/PortfolioConfig.jsx'

export class SkillsCard extends Component {
  render() {
    return (
      <SkillBar skills={skills} />
    );
  }
}

export default SkillsCard;

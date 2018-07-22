import React, { Component } from "react";
import CardNoFooter from "components/Card/CardNoFooter.jsx";
import SkillBar from 'react-skillbars';
import { skillsData, skillsColors, skillsTitle, skillsSubtitle } from 'variables/PortfolioConfig.jsx'

export class SkillsCard extends Component {
  render() {
    return (
      <CardNoFooter
        title={skillsTitle}
        category={skillsSubtitle}
        content={
          <SkillBar skills={skillsData} colors={skillsColors} />
        }
      />
    );
  }
}

export default SkillsCard;

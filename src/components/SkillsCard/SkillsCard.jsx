import React, { Component } from "react";
import SkillBar from 'react-skillbars';
import skills from 'variables/UserConfig.jsx'

var SKILLS = [
  {type: "Node", level: 85},
  {type: "Javascript", level: 75},
];

export class SkillsCard extends Component {
  render() {
    return (
      <SkillBar skills={SKILLS} />
    );
  }
}

export default SkillsCard;

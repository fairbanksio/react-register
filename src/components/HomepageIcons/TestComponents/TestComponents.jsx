import React, { Component } from "react";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import { userConfig } from "variables/UserConfig.jsx";

export class TestComponents extends Component {
  render() {
    return (
      <a style={{'color':'#000000'}}
        href={'https://linkedin.com/in/' + userConfig.LinkedIn}
        target='_blank'
        rel='noopener noreferrer'>
          <StatsCard
            bigIcon={<i className="far fa-envelope" style={{'color':'#000000'}}/>}
            statsText="Test"
            statsValue={userConfig.FullName}
            statsIcon={<i className="fa fa-envelope" />}
            statsIconText="Drop me a line"
          />
      </a>
    );
  }
}

export default TestComponents;

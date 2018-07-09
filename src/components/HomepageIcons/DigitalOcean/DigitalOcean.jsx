import React, { Component } from "react";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import { extraConfigs } from "variables/UserConfig.jsx";

export class DigitalOcean extends Component {
  render() {
    return (
      <a style={{'color':'#333'}}
        href={extraConfigs.doReferral}
        target='_blank'
        rel='noopener noreferrer'>
        <StatsCard
          bigIcon={<i className="fab fa-lg fa-digital-ocean" style={{'color':'#008bcf'}}/>}
          statsText="Powered By"
          statsValue='Digital Ocean'
          statsIcon={<i className="fa fa-cloud" />}
          statsIconText="Simplicity at scale."
        />
      </a>
    );
  }
}

export default DigitalOcean;
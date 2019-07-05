import React, { Component } from "react";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";

export class LinkedIn extends Component {
  render() {
    return (
      <a style={{'color':'#000000'}}
        href={'https://linkedin.com/in/' + this.props.username}
        target='_blank'
        rel='noopener noreferrer'>
          <StatsCard
            bigIcon={<i className="fab fa-linkedin" style={{'color':'#0077B5'}}/>}
            statsText="Contact me on"
            statsValue="LinkedIn"
            statsIcon={<i className="fa fa-envelope" />}
            statsIconText="Drop me a line"
          />
      </a>
    );
  }
}

export default LinkedIn;

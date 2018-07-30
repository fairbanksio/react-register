import React, { Component } from "react";
import CardNoFooter from "components/Card/CardNoFooter.jsx";
import ReactHighcharts from "react-highcharts";

export class HighCharts extends Component {
  render() {
    return (
      <CardNoFooter
        content={
          <div>
            <ReactHighcharts config={this.props.chartData}></ReactHighcharts>
          </div>
        }
      />
    );
  }
}

export default HighCharts;

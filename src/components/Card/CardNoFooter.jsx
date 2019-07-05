import React, { Component } from "react";
import Button from '@material-ui/core/Button';

export class CardNoFooter extends Component {
  render() {
    return (
      <div className={"card" + (this.props.plain ? " card-plain" : "")}>
        <div className={"header" + (this.props.hCenter ? " text-center" : "")}>
          <h4 className="title">{this.props.title}</h4>
          <p className="category">{this.props.category}</p>
        </div>
        <div
          className={
            "content" +
            (this.props.ctAllIcons ? " all-icons" : "") +
            (this.props.ctTableFullWidth ? " table-full-width" : "") +
            (this.props.ctTableResponsive ? " table-responsive" : "") +
            (this.props.ctTableUpgrade ? " table-upgrade" : "")
          }
        >
          {this.props.content}

        </div>

        {this.props.moreLink ?
          <div className="text-center">
            <hr style={{'margin':'5px 15px'}}/>
            <a href={this.props.moreLink}>

              <Button size="large" variant="outlined" color="#234323" style={{'margin':'5px 15px 10px 10px', 'borderWidth':'1px', 'color':'#234323', 'borderColor':'#234323', 'width':'50%'}}>
                <i className="fas fa-plus-square"/><span style={{'paddingLeft':'10px'}}>View More</span>
              </Button>
            </a>
          </div>
        :null}

      </div>
    );
  }
}

export default CardNoFooter;

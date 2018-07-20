import React, { Component } from "react";
import Button from "components/CustomButton/CustomButton.jsx";


export class UserCard extends Component {
  randomQuote() {
    var quotes = this.props.quotes;
    var quote = quotes[Math.floor(Math.random() * quotes.length)];
    this.setState({"quote":quote});
  }
  componentWillMount() {
    this.setState({
      "quote":"-"
    })
  }
  componentDidMount() {
    this.randomQuote();
  }
  render() {

    var socials = this.props.socials.map(function(socialButton,i) {
        return (
          <a href={socialButton.url} target='_blank' rel='noopener noreferrer' key={i}>
            <Button simple>
              <i className={socialButton.icon} />
            </Button>
          </a>
        )
    });


    return (
      <div className="card card-user">
        <div className="image">
          <img src={this.props.bgImage} alt="..." />
        </div>
        <div className="content">
          <div className="author">
            <img
              className="avatar border-gray"
              src={this.props.avatar}
              alt="..."
            />
            <h4 className="title">
              {this.props.name}
              <br />
              <small style={{'fontSize':'14px'}}>{this.props.jobTitle}</small>
            </h4>
          </div>
          <br />
          <p className="description text-center">{this.state.quote}</p>
        </div>
        <hr />
        <div className="text-center">
          {socials}
        </div>
      </div>
    );
  }
}

export default UserCard;

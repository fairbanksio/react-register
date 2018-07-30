import React, { Component } from "react";
import { Card } from "components/Card/Card.jsx";
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {CopyToClipboard} from 'react-copy-to-clipboard';

class FormattedJSON extends Component {
  render() {
    return (
      <div style={{
        border:      '1px solid #DDDDDD',
        fontFamily: 'Source Code Pro',
        fontSize:   '10pt',
        width:       '100%',
        height:      '15em',
        display:     'block',
        padding:     5,
        minWidth:    '100%',
        maxWidth:    '100%',
        wordWrap:   'break-word',
        color:      'green',
        whiteSpace: 'pre-wrap',
        overflow:   'auto'
      }}>
        {this.props.inputText}
      </div>
    );
  }
}

export class JSONFormatter extends Component {
  constructor(){
    super();
    this.state = {
      inputText:'{"login":"jonfairbanks","id":1957806,"node_id":"MDQ6VXNlcjE5NTc4MDY=","avatar_url":"https://avatars0.githubusercontent.com/u/1957806?v=4","gravatar_id":"","url":"https://api.github.com/users/jonfairbanks","html_url":"https://github.com/jonfairbanks","followers_url":"https://api.github.com/users/jonfairbanks/followers","following_url":"https://api.github.com/users/jonfairbanks/following{/other_user}","gists_url":"https://api.github.com/users/jonfairbanks/gists{/gist_id}","starred_url":"https://api.github.com/users/jonfairbanks/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/jonfairbanks/subscriptions","organizations_url":"https://api.github.com/users/jonfairbanks/orgs","repos_url":"https://api.github.com/users/jonfairbanks/repos","events_url":"https://api.github.com/users/jonfairbanks/events{/privacy}","received_events_url":"https://api.github.com/users/jonfairbanks/received_events","type":"User","site_admin":false,"name":"Jon Fairbanks","company":"@paypal ","blog":"https://fairbanks.io","location":"San Jose, CA","email":null,"hireable":null,"bio":null,"public_repos":49,"public_gists":0,"followers":5,"following":5,"created_at":"2012-07-11T16:48:53Z","updated_at":"2018-07-20T04:10:30Z"}',
      indent: 'TAB',
      copied: false
    };
  }
  clearInputText = () => {
    this.setState({'inputText': ''});
  };
  resetInputText = () => {
    this.setState({'inputText': this.props.sampleJSON});
  };
  copyJSON = () => {
    let _this = this;
    setTimeout(function(){ _this.setState({'copied' : false}); }, 3000);
  };
  onInputTextChange = (event) => {
    this.setState({'inputText': event.target.value});
  };
  onIndentationChange = (event) => {
    this.setState({'indent' : event.target.value});
  };
  formatJSON(input, space) {
    if (input) {
      var parsedData = JSON.parse(input);
      var outputText = JSON.stringify(parsedData, null, space);
      return outputText;
    }
    else {
        return '';
    }
  }
  getJSONData(){
    // eslint-disable-next-line
    var outputText, outputClass;
    try {
      var indent = this.state.indent;
      var space = (indent === 'TAB') ? '\t' : parseInt(indent, 10);
      outputText = this.formatJSON(this.state.inputText, space);
      outputClass = 'output-good';
    }
    catch (err) {
      // JSON.parse threw an exception
      outputText = err.message;
      outputClass = 'output-error';
    }

    return outputText
  }
  render() {
    return (
      <Card
        title={this.props.title}
        category={this.props.subtitle}
        statsIcon="fab fa-react"
        stats="Powered by React"
        content={
          <div>
            <span style={{ fontFamily: "Roboto", fontSize: 22, fontWeight: 300, marginBottom: 20 }}>Raw JSON:</span>
            <div id="formatter"></div>
            <div style={{
              margin: 0,
              padding: 0,
              border: 0,
              fontSize: '100%',
              font: 'inherit',
              verticalAlign: 'baseline',
            }}>
                <textarea
                  value={this.state.inputText}
                  onChange={this.onInputTextChange}
                  placeholder="Paste your JSON here"
                  autoFocus="true"
                  style={{
                    border:      '1px solid #DDDDDD',
                    fontFamily: 'Source Code Pro',
                    fontSize:   '10pt',
                    width:       '100%',
                    height:      '15em',
                    display:     'block',
                    padding:     5,
                    minWidth:    '100%',
                    maxWidth:    '100%',
                    color:       'black',
                  }}
                />
                <br/>
                <Button onClick={this.clearInputText} size="small" variant="contained" color="primary" style={{ fontSize: 11 }}>
                  <i className="far fa-trash-alt"></i>
                  <span style={{ marginLeft: 6 }}>Clear Input</span>
                </Button>
                <Button onClick={this.resetInputText} size="small" variant="contained" color="primary" style={{ marginLeft: 10, fontSize: 11 }}>
                  <i className="fas fa-sync"></i>
                  <span style={{ marginLeft: 6 }}>Reset Input</span>
                </Button>
                <br/>
                <hr/>
                <span style={{ fontFamily: "Roboto", fontSize: 22, fontWeight: 300, marginBottom: 20 }}>Formatted JSON:</span>
                <FormattedJSON
                  inputText={this.getJSONData()}
                  indent={this.state.indent}
                />
                <br/>
                <div className="indentation">
                  <FormControl style={{ minWidth: 100 }}>
                    <InputLabel htmlFor="age-helper" style={{ fontSize: 12 }}>Indent</InputLabel>
                    <Select
                      value={this.state.indent}
                      onChange={this.onIndentationChange}
                      input={ <Input name="indent" id="indent-type" /> }
                      style={{
                        fontSize: 11
                      }}
                    >
                      <MenuItem value={0}>
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={2}>Two Spaces</MenuItem>
                      <MenuItem value={"TAB"}>Tabs</MenuItem>
                    </Select>
                    <FormHelperText style={{ fontSize: 8 }}>Formatting Type</FormHelperText>
                  </FormControl>
                </div>
                <br/>
                <CopyToClipboard text={this.getJSONData()}
                  onCopy={() => this.setState({copied: true})}>
                  <Button onClick={this.copyJSON} size="small" variant="contained" color="primary" style={{ fontSize: 11 }}>
                    <i className="fas fa-copy"></i>
                    <span style={{ marginLeft: 6 }}>Copy JSON</span>
                  </Button>
                </CopyToClipboard>
                {this.state.copied ? <span style={{paddingLeft: 10, color: '#a9a9a9'}}>Copied</span> : null}
                <br/><br/>
              </div>
            </div>
        }
      />
    );
  }
}

export default JSONFormatter;
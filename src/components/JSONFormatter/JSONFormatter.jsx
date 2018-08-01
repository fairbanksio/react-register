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
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {UnControlled as CodeMirror} from 'react-codemirror2'
require('codemirror/mode/javascript/javascript');
require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');

// MaterialUI Theme Options: https://material-ui.com/customization/themes/#theme-configuration-variables
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#83c3f7', // Light Blue
      contrastText: '#fff', // White
    },
    secondary: {
      main: '#a2cf6e', // Light Green (for Copied button)
      contrastText: '#fff', // White
    },
  },
});

// Additional CodeMirror options can be found here: https://github.com/JedWatson/react-codemirror
var inputOptions = {
  lineNumbers: true,
  mode: { name: 'javascript', json: true },
  theme: 'material',
  autofocus: true // Input box will take user input on page load
};
var outputOptions = {
  lineNumbers: true,
  mode: { name: 'javascript', json: true },
  theme: 'material',
  readOnly: 'nocursor' // Nocursor for proper mobile handling
};

class FormattedJSON extends Component {
  render() {
    return (
      <div>
        <CodeMirror
          ref="editor"
          value={this.props.inputText}
          options={outputOptions}
          autoFocus={true}
          onChange={ (editor, data, value) => {} }
          preserveScrollPosition={true}
        />
      </div>
    );
  }
}

export class JSONFormatter extends Component {
  clearInputText = () => {
    this.setState({'inputText': ''});
  };
  resetInputText = () => {
    this.setState({'inputText': this.props.sampleJSON});
  };
  copyJSON = () => {
    let _this = this;
    setTimeout(function(){ _this.setState({'copied' : false}); }, 4000);
  };
  onInputTextChange = (event, data, value) => {
    try{
      this.setState({'inputText': event.target.value});
    }catch(err){
      this.setState({'inputText': value});
    }
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
      outputText = 'It looks like there was an error with your JSON---\n\n' + err.message;
      outputClass = 'output-error';
    }

    return outputText
  }
  componentWillMount() {
    this.setState({
      inputText: this.props.sampleJSON,
      indent: this.props.defaultIndent,
      copied: false
    });
  }
  componentWillUnmount() {
    window.confirm('You are leaving the JSON Formatter.')
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
            <MuiThemeProvider theme={theme}>
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
                  {/*
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
                      backgroundColor: '#f9f9f9'
                    }}
                  />
                  */}
                  <CodeMirror ref="display" value={this.state.inputText} onChange={this.onInputTextChange} options={inputOptions} preserveScrollPosition={true} autoCursor={false} />
                  <br/>
                  <Button onClick={this.clearInputText} size="small" variant="contained" color="primary" style={{ fontSize: 11 }}>
                    <i className="far fa-trash-alt"></i>
                    <span style={{ marginLeft: 6 }}>Clear Input</span>
                  </Button>
                  <Button onClick={this.resetInputText} size="small" variant="contained" color="primary" style={{ marginLeft: 10, fontSize: 11 }}>
                    <i className="fas fa-sync"></i>
                    <span style={{ marginLeft: 6 }}>Reset Sample</span>
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
                        <MenuItem value={1}>One Space</MenuItem>
                        <MenuItem value={2}>Two Spaces</MenuItem>
                        <MenuItem value={4}>Four Spaces</MenuItem>
                        <MenuItem value={"TAB"}>Tabs</MenuItem>
                      </Select>
                      <FormHelperText style={{ fontSize: 8 }}>Formatting Type</FormHelperText>
                    </FormControl>
                  </div>
                  <br/>
                  {this.state.copied
                    ? <Button onClick={this.copyJSON} size="small" variant="contained" color="secondary" style={{ fontSize: 11 }}>
                        <i className="fas fa-check"></i>
                        <span style={{ marginLeft: 6 }}>Copied</span>
                      </Button>
                    : <CopyToClipboard text={this.getJSONData()} onCopy={() => this.setState({copied: true})}>
                        <Button onClick={this.copyJSON} size="small" variant="contained" color="primary" style={{ fontSize: 11 }}>
                          <i className="fas fa-copy"></i>
                          <span style={{ marginLeft: 6 }}>Copy JSON</span>
                        </Button>
                      </CopyToClipboard>
                  }
                  <br/><br/>
                </div>
              </MuiThemeProvider>
            </div>
        }
      />
    );
  }
}

export default JSONFormatter;
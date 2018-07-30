import React, { Component } from 'react';
import CardNoFooter from "components/Card/CardNoFooter.jsx";
import ReactMde, {ReactMdeTypes} from 'react-mde';
import * as Showdown from 'showdown';
import xssFilter from 'showdown-xss-filter';
import 'react-mde/lib/styles/css/react-mde-all.css';

export interface AppState {
    mdeState: ReactMdeTypes.MdeState;
}

export class mdEditor extends Component {
  converter: Showdown.Converter;
  constructor(props) {
      super(props);
      this.state = {
          mdeState: { markdown: props.markdown || 'Hello **World**!' },
      };
      this.converter = new Showdown.Converter({tables: true, simplifiedAutoLink: true, extensions: [xssFilter]});
  }
  handleValueChange = (mdeState: ReactMdeTypes.MdeState) => {
      this.setState({mdeState});
  }
  render() {
    return (
      <CardNoFooter
        title={this.props.title}
        category={this.props.subtitle}
        content={
          <div className='container' style={{ width: '99%' }}>
            <ReactMde
                onChange={this.handleValueChange}
                editorState={this.state.mdeState}
                generateMarkdownPreview={(markdown) => Promise.resolve(this.converter.makeHtml(markdown))}
                layout={this.props.layout}
            />
            <br/>
          </div>
        }
      />
    );
  }
}

export default mdEditor;

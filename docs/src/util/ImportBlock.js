/**
 * Created by alucas on 6/12/16.
 */
import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { convertToRaw, ContentState, convertFromHTML } from 'draft-js';

import { Wysiwyg } from '../';
import { TextArea } from './TextArea';


class ImportBlock extends Component {

  componentWillUpdate() {
    if (!(this.state)) {
      this.setState({ value: this.props.value });
    } else if (this.textarea.state.value !== this.state.value) {
      this.setState({ value: this.textarea.state.value });
    }
  }
  render() {
    let value = (this.state && this.state.value) ? this.state.value : null;
    value = (!value && this.props.value) ? this.props.value : value;
    let textareaValue = (this.textarea && this.textarea.state && this.textarea.state.value) ? this.textarea.state.value : null;
    const contentState = textareaValue ? convertToRaw(ContentState.createFromBlockArray(convertFromHTML(textareaValue))) : null;
    return (
      <div>
        <Col xs={4}>
          <p>{'<h5>hola mundo</h5>'}</p>
          <TextArea
            ref={(c) => {
              this.textarea = c;
            }}
            value={value}
            onChange={() => {
              this.setState({ value: textareaValue });
            }}
          />
        </Col>
        <Col xs={8}>
          <Wysiwyg
            toolbarClassName="demo-toolbar"
            wrapperClassName="demo-wrapper-auto"
            editorClassName="demo-editor"
            ref={(c) => { this.wysiwyg = c; }}
            initialContentState={textareaValue}
            contentState={contentState}
          />
        </Col>
      </div>
    );
  }
}

ImportBlock.propTypes = {
  value: React.PropTypes.string,
  onChange: React.PropTypes.func,
};

export { ImportBlock };

/**
 * Created by alucas on 11/12/16.
 */

/* @flow */

import React, { Component, PropTypes } from 'react';
import { getSelectedBlocksMetadata, setBlockData } from 'draftjs-utils';
import classNames from 'classnames';
import Option from '../Option';
import { Dropdown, DropdownOption } from '../Dropdown';
import { getFirstIcon } from '../../utils/toolbar';
import styles from './styles.css'; // eslint-disable-line no-unused-vars

export default class ViewControl extends Component {

  static propTypes = {
    editorState: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    modalHandler: PropTypes.object,
    config: PropTypes.object,
  };

  state = {
    currentTextAlignment: undefined,
  }

  componentWillReceiveProps(properties) {
    if (properties.editorState !== this.props.editorState) {
      this.setState({
        currentTextAlignment: getSelectedBlocksMetadata(properties.editorState).get('text-align'),
      });
    }
  }

  addBlockAlignmentData:Function = (value: string) => {
    const { editorState, onChange } = this.props;
    const { currentTextAlignment } = this.state;
    if (currentTextAlignment !== value) {
      onChange(setBlockData(editorState, { 'text-align': value }));
    } else {
      onChange(setBlockData(editorState, { 'text-align': undefined }));
    }
  }

  renderInFlatList(config: Object): Object {
    const { currentTextAlignment } = this.state;
    const { options, edit, html, markdown, preview, raw, className } = config;
    return (
      <div className={classNames('rdw-view-wrapper', className)}>
        {options.indexOf('edit') >= 0 && <Option
          value="edit"
          className={classNames(edit.className)}
          active={currentTextAlignment === 'left'}
          onClick={this.addBlockAlignmentData}
        >
          <img
            style={{width: '18px', height: '18px'}}
            src={edit.icon}
            role="presentation"
          />
        </Option>}
        {options.indexOf('html') >= 0 && <Option
          value="html"
          className={classNames(html.className)}
          active={currentTextAlignment === 'center'}
          onClick={this.addBlockAlignmentData}
        >
          <img
            style={{width: '18px', height: '18px'}}
            src={html.icon}
            role="presentation"
          />
        </Option>}
        {options.indexOf('markdown') >= 0 && <Option
          value="markdown"
          className={classNames(markdown.className)}
          active={currentTextAlignment === 'right'}
          onClick={this.addBlockAlignmentData}
        >
          <img
            style={{width: '18px', height: '18px'}}
            src={markdown.icon}
            role="presentation"
          />
        </Option>}
        {options.indexOf('preview') >= 0 && <Option
          value="preview"
          className={classNames(preview.className)}
          active={currentTextAlignment === 'justify'}
          onClick={this.addBlockAlignmentData}
        >
          <img
            style={{width: '18px', height: '18px'}}
            src={preview.icon}
            role="presentation"
          />
        </Option>}
        {options.indexOf('raw') >= 0 && <Option
          value="raw"
          className={classNames(raw.className)}
          active={currentTextAlignment === 'justify'}
          onClick={this.addBlockAlignmentData}
        >
          <img
            style={{width: '18px', height: '18px'}}
            src={raw.icon}
            role="presentation"
          />
        </Option>}
      </div>
    );
  }

  renderInDropDown(config: Object): Object {
    const { currentTextAlignment } = this.state;
    const { options, edit, html, markdown, preview, raw, className } = config;
    const { modalHandler } = this.props;
    return (
      <Dropdown
        className={classNames('rdw-text-align-dropdown', className)}
        onChange={this.addBlockAlignmentData}
        modalHandler={modalHandler}
      >
        <img
          style={{width: '18px', height: '18px'}}
          src={getFirstIcon(config)}
          role="presentation"
        />
        {options.indexOf('edit') >= 0 && <DropdownOption
          value="edit"
          active={currentTextAlignment === 'left'}
          className={classNames('rdw-text-align-dropdownOption', edit.className)}
        >
          <img
            style={{width: '18px', height: '18px'}}
            src={edit.icon}
            role="presentation"
          />
        </DropdownOption>}
        {options.indexOf('html') >= 0 && <DropdownOption
          value="html"
          active={currentTextAlignment === 'center'}
          className={classNames('rdw-text-align-dropdownOption', html.className)}
        >
          <img
            style={{width: '18px', height: '18px'}}
            src={html.icon}
            role="presentation"
          />
        </DropdownOption>}
        {options.indexOf('markdown') >= 0 && <DropdownOption
          value="markdown"
          active={currentTextAlignment === 'right'}
          className={classNames('rdw-text-align-dropdownOption', markdown.className)}
        >
          <img
            style={{width: '18px', height: '18px'}}
            src={markdown.icon}
            role="presentation"
          />
        </DropdownOption>}
        {options.indexOf('preview') >= 0 && <DropdownOption
          value="preview"
          active={currentTextAlignment === 'justify'}
          className={classNames('rdw-text-align-dropdownOption', preview.className)}
        >
          <img
            style={{width: '18px', height: '18px'}}
            src={preview.icon}
            role="presentation"
          />
        </DropdownOption>}
        {options.indexOf('raw') >= 0 && <DropdownOption
          value="raw"
          active={currentTextAlignment === 'justify'}
          className={classNames('rdw-text-align-dropdownOption', raw.className)}
        >
          <img
            style={{width: '18px', height: '18px'}}
            src={raw.icon}
            role="presentation"
          />
        </DropdownOption>}
      </Dropdown>
    );
  }

  render(): Object {
    const { config } = this.props;
    if (config.inDropdown) {
      return this.renderInDropDown(config);
    }
    return this.renderInFlatList(config);
  }
}

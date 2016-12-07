/**
 * Created by alucas on 6/12/16.
 */
import React, { Component } from 'react';

class TextArea extends Component {
  constructor() {
    super();
    this.setValue = this.setValue.bind(this);
  }
  setValue(value) {
    this.setState({ value });
  }
  componentWillmount() {
    // this.state.value = this.props.value ? this.props.value : '';
  }
  render() {
    const { className, disabled } = this.props;
    const value = (this.state && this.state.value) ? this.state.value : '';
    return (
      <textarea
        style={{
          height: 200,
          width: '100%',
        }}
        className={className}
        disabled={disabled}
        value={value}
      />
    );
  }
}

TextArea.propTypes = {
  className: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  value: React.PropTypes.string,
};

export { TextArea };

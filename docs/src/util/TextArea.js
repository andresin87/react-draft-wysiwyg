/**
 * Created by alucas on 6/12/16.
 */
import React, { Component } from 'react';

class TextArea extends Component {
  constructor() {
    super();
    this.setValue = this.setValue.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onChange(event) {
    this.setState({ value: event.target.value });
    if (this.props && this.props.onChange) {
      this.props.onChange();
    }
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
          minHeight: 200,
          width: '100%',
        }}
        className={className}
        disabled={disabled}
        onChange={this.onChange}
        value={value}
      >
        {value}
      </textarea>
    );
  }
}

TextArea.propTypes = {
  className: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  value: React.PropTypes.string,
  onChange: React.PropTypes.func,
};

TextArea.defaultProps = {
  disabled: false,
};

export { TextArea };

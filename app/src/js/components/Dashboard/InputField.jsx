import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autobind from 'react-autobind';
import { Label } from 'semantic-ui-react';

class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      hasError: false,
    };
    autobind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.defaultValue) {
      this.showLabel();
    }
  }
  showLabel() {
    this.setState({
      visible: true,
    });
  }
  handleOnBlur(e) {
    if (!e.target.value) {
      this.setState({
        visible: false,
      });
    }
  }
  handleOnChange(e) {
    const hasError = this.props.validation(e.target.value);
    this.props.handleOnChange({ field: e.target.name, value: e.target.value });
    this.setState({
      hasError,
    });
  }
  render() {
    const placeholder = this.state.visible ? '' : this.props.inputPlaceholder;
    return (
      <div className="input-field">
        <Label className={`float-label ${this.state.visible ? 'show' : 'hide'}`} pointing="below">{this.props.labelText}</Label>
        <input
          type={this.props.inputType}
          placeholder={placeholder}
          onBlur={this.handleOnBlur}
          onFocus={this.showLabel}
          value={this.props.defaultValue ? this.props.defaultValue : ''}
          onChange={this.handleOnChange}
          name={this.props.inputName}
          disabled={this.props.disabled}
        />
        { this.state.hasError && <Label pointing color="red">{this.props.errorMessage}</Label> }
      </div>
    );
  }
}

InputField.propTypes = {
  inputType: PropTypes.string.isRequired,
  inputPlaceholder: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.string,
  validation: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

export default InputField;

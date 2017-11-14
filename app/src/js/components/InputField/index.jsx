import React from 'react';
import PropTypes from 'prop-types';
import { Input, TextArea, Message } from 'semantic-ui-react';

const InputField = (props) => {
  const errorMessage = props.hasError ?
    (
      <Message negative size="mini">
        <p>{props.errorMessage}</p>
      </Message>
    ) : '';
  const inputType = props.inputType ? props.inputType : 'text';
  const inputField = props.inputType && props.inputType === 'textarea' ? (
    <TextArea
      placeholder={props.placeholder}
      error={props.hasError ? props.hasError : undefined}
    />
  ) : (
    <Input
      type={inputType}
      error={props.hasError ? props.hasError : undefined}
      placeholder={props.placeholder}
    />
  );
  return (
    <div>
      {inputField}
      {errorMessage}
    </div>
  );
};

InputField.propTypes = {
  inputType: PropTypes.string,
  hasError: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default InputField;

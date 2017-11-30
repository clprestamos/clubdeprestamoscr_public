import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

import InputField from '../../InputField';
import Button from '../../Button';
import Recaptcha from '../../Recaptcha';

const Step1 = (props) => {
  const inputFields = [{
    id: 1,
    placeholder: 'Password *',
    hasError: false,
    errorMessage: 'Campo requerido',
    customClass: 'password',
    inputType: 'password',
  },
  {
    id: 2,
    placeholder: 'Confirmar password *',
    hasError: false,
    errorMessage: 'Campo requerido',
    customClass: 'password',
    inputType: 'password',
  }];

  return (
    <div className="client-subscription step1">
      <Form>
        {
          inputFields.map(inputField => (
            <Form.Field key={inputField.id} className={inputField.customClass ? inputField.customClass : ''}>
              <InputField
                placeholder={inputField.placeholder}
                hasError={inputField.hasError}
                errorMessage={inputField.errorMessage}
                inputType={inputField.inputType}
              />
            </Form.Field>
          ))
        }
        <Form.Field className="recaptcha">
          <Recaptcha />
        </Form.Field>
        <Button
          onClick={props.btnOnClick}
          text={props.btnText}
          buttonType={props.btnType}
        />
        <span>Campos obligatorios **</span>
      </Form>
    </div>
  );
};

Step1.propTypes = {
  btnOnClick: PropTypes.func.isRequired,
  btnText: PropTypes.string.isRequired,
  btnType: PropTypes.string.isRequired,
};

export default Step1;

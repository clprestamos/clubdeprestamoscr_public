import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

import InputField from '../../InputField';
import Button from '../../Button';

const Step1 = (props) => {
  const inputFields = [{
    id: 1,
    placeholder: 'Nombre *',
    hasError: false,
    errorMessage: 'Campo requerido',
    customClass: 'name',
  },
  {
    id: 2,
    placeholder: 'Apellido *',
    hasError: false,
    errorMessage: 'Campo requerido',
  },
  {
    id: 3,
    placeholder: 'Cédula *',
    hasError: false,
    errorMessage: 'Campo requerido',
  },
  {
    id: 4,
    placeholder: 'Teléfono *',
    hasError: false,
    errorMessage: 'Campo requerido',
    inputType: 'tel',
  },
  {
    id: 5,
    placeholder: 'Teléfono de referencia',
    hasError: false,
    errorMessage: 'Campo requerido',
    inputType: 'tel',
  },
  {
    id: 6,
    placeholder: 'Email',
    hasError: false,
    errorMessage: 'Campo requerido',
    inputType: 'email',
    customClass: 'email',
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

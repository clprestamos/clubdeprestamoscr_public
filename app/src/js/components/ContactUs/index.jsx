import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

import Button from '../Button';
import InputField from '../InputField';

const ContactUs = (props) => {
  const inputFields = [{
    id: 1,
    placeholder: 'Nombre Completo',
    hasError: false,
    errorMessage: 'Campo requerido',
  },
  {
    id: 2,
    placeholder: 'Email',
    hasError: false,
    errorMessage: 'Campo requerido',
    inputType: 'email',
  },
  {
    id: 3,
    placeholder: 'Teléfono',
    hasError: false,
    errorMessage: 'Campo requerido',
    inputType: 'tel',
  },
  {
    id: 4,
    placeholder: 'Asunto',
    hasError: false,
    errorMessage: 'Campo requerido',
  },
  {
    id: 5,
    placeholder: 'Mensaje',
    hasError: false,
    errorMessage: 'Campo requerido',
    inputType: 'textarea',
  }];
  return (
    <div className="contact-us">
      <h2>¡Contáctenos!</h2>
      <Form>
        <Form.Field>
          {
            inputFields.map(inputField => (
              <InputField
                key={inputField.id}
                placeholder={inputField.placeholder}
                hasError={inputField.hasError}
                errorMessage={inputField.errorMessage}
                inputType={inputField.inputType}
              />
            ))
          }
        </Form.Field>
        <Button
          onClick={props.btnOnClick}
          text={props.buttonText}
          buttonType={props.buttonType}
          to={props.buttonTo}
        />
      </Form>
    </div>
  );
};

ContactUs.propTypes = {
  btnOnClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonType: PropTypes.string.isRequired,
  buttonTo: PropTypes.string.isRequired,
};

export default ContactUs;

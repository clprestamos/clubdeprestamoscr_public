import React from 'react';
import { Icon } from 'semantic-ui-react';

import Button from '../Button';

const SubscriptionSuccess = () => (
  <div className="subscription-success">
    <div>
      <h3><Icon name="check" className="oval" /> Formulario Enviado con éxito</h3>
      <div className="divider" />
      <p>Gracias por iniciar el proceso de solicitud de registro como cliente. Nuestro equipo revisará la información suministrada.</p>
      <p>Por favor, ir al &quot;inbox&quot; del correo electrónico que utilizó en el formulario.</p>
      <p>Ahí encontrará un correo con el usuario y los siguientes pasos para continuar con el proceso.</p>
      <Button
        buttonType="default"
        to="/login"
        text="Iniciar Sesión"
      />
    </div>
  </div>
);

export default SubscriptionSuccess;

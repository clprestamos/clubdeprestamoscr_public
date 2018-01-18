import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { toggleMenuState } from '../actions';

const TermsConditions = (props) => {
  props.toggleMenuState(false);
  return (
    <div className="internal-page terms-conditions">
      <div className="content">
        <h1>Política de Privacidad</h1>
        <div className="main-content">
          <p>
            CLUB DE PRÉSTAMOS obtiene datos personales por medio del formulario para suscribirse
            como usuario de suplataforma. Estos datos solo serán accesibles para el personal de
            CLUB DE PRÉSTAMOS y para los otros usuarios de la aplicación y sitio web.
          </p>
          <p>
            CLUB DE PRÉSTAMOS recolectará los datos personales junto con el consentimiento informado
            del titular de los mismos, para sus respectivas bases de datos, únicamente para la finalidad
            indicada en el formulario.
          </p>
          <p>
            Los usuarios pueden ejercer sus derechos de acceso, rectificación, cancelación y
            oposición en relación con el tratamiento de sus datos personales contactando a
            CLUB DE PRÉSTAMOS a info@clubdeprestamos.cr
          </p>
          <p>
            Los usuarios se obligan a cumplir con la presente Política de Privacidad, así como
            con las medidas de seguridad implementas por CLUB DE PRÉSTAMOS para salvaguardar
            los datos personales que posee en sus bases de datos y su tratamiento.
          </p>
          <p>
            CLUB DE PRÉSTAMOS tiene medidas físicas y lógicas que garantizan la seguridad de la
            información contenida en sus bases de datos, asegurando la privacidad, confidencialidad
            e integridad de la información. CLUB DE PRÉSTAMOS no garantiza que dichas medidas
            prevengan todo tipo de accesos no autorizados a la información confidencial almacenada.
          </p>
          <p>
            CLUB DE PRÉSTAMOS puede modificar la presente Política de Privacidad en cualquier momento.
            La nueva versión entra en vigencia apenas sea publicada en la Aplicación, quedando los
            titulares de los datos personales notificados por este medio, pudiendo el titular podrá
            revocar el consentimiento informado otorgado.
          </p>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    toggleMenuState,
  }, dispatch);

export default withRouter(connect(null, mapDispatchToProps)(TermsConditions));

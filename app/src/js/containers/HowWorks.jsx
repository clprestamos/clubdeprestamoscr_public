import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { toggleMenuState } from '../actions';
import TitleHeader from '../components/TitleHeader';

const HowWorks = (props) => {
  props.toggleMenuState(false);
  return (
    <div className="internal-page">
      <div className="content">
        <TitleHeader
          title="¿Cómo funciona?"
          subHeader="El Club de Préstamos es la novedosa alternativa de crédito social inspirada en las redes sociales “peer to peer” (P2P), conectamos personas con otras personas."
          imageHeader="images/how-works.jpg"
        />
        <div className="main-content">
          <p>Participar es muy fácil</p>
          <p className="list-item">1- Si necesitas un crédito (Prestatario):</p>
          <p>Debes realizar la inscripción en la plataforma brindando los datos completos que se solicitan en la sección <b>“PRESTAMOS”</b>.</p>
          <p>En el siguiente paso se solicitarán los documentos de respaldo y otra información, lo cual generará un “score crediticio” para que usted y los inversionistas conozcan sobre su crédito y las condiciones de tasa de interés y plazo de pagos.</p>
          <p>Realizas la postulación de solicitud.</p>
          <p>Cuando un inversionista elija financiar su crédito le llegará una notificación con los pasos a seguir. Una vez que el préstamo se formaliza, el prestamista depositará el dinero en su cuenta bancaria.</p>
          <p>Su identidad no será publicada por razones de seguridad a los inversionistas.</p>
          <p>¡Ya tiene el crédito! Ahora solo debe hacer sus pagos puntualmente, y así podrá acceder a más créditos en el futuro, inclusive, con condiciones más competitivas.</p>
          <p className="list-item">2- Si quieres invertir (Prestamista):</p>
          <p>Debes realizar la inscripción en la plataforma brindando los datos completos que se solicitan en la sección <b>“INVIERTA”</b>.</p>
          <p>En el siguiente paso se solicitarán información adicional para la transparencia del sistema, todo acorde con la normativa vigente, y así podrás ver las solicitudes de crédito disponibles.</p>
          <p>Su identidad no será publicada a los solicitantes de crédito por razones de seguridad.</p>
          <p>Cuando elija el crédito a financiar lo señala en la plataforma y nosotros le ayudamos a formalizarlo con el prestatario. Una vez esté formalizado, usted hace la transferencia del dinero acordado al prestatario. En este punto es importante que usted domicilie la cuenta cliente en el sitio web de su banco para programar los débitos (pago de mensualidades) de forma automática de la cuenta del prestatario.</p>
          <p>¡Ya estás invirtiendo!</p>
          <p className="list-item">3- ¿Cómo ganamos nosotros?:</p>
          <p>Todos ganamos, quien recibe el crédito por la celeridad y tasa de interés menor que la tradicional, quien invierte porque puede diversificar su cartera, minimizar riesgo y obtener un retorno mayor al del ahorro bancario y nosotros, como organizadores del Club, únicamente solicitamos una mensualidad de US$5.00 a los prestatarios (en estos momentos tenemos una oferta de no cobro de mensualidad por 1 año a los primeros 100 prestatarios que se hagan miembros del Club) y cobramos una comisión del 5% del crédito otorgado tanto al prestamista como al prestatario.</p>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    toggleMenuState,
  }, dispatch);

export default withRouter(connect(null, mapDispatchToProps)(HowWorks));

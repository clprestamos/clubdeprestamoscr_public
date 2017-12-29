import React from 'react';
import PropTypes from 'prop-types';

import Hero from '../../../components/Hero';
import Card from '../../../components/Card';

const cards = [
  {
    icon: 'credit card alternative',
    header: 'Solicitud de crédito',
    content: 'Esta es la solicitud de préstamo que hemos recibido de su parte. Esta será publicada entre los miembros inversionista para que ellos lo valoren.',
    btnTo: '/cliente/solicitud-prestamo',
  },
  {
    icon: 'thumbs outline up',
    header: 'Préstamo aprobado',
    content: 'Esta es la solicitud de préstamo que hemos aprobado. Puede tener acceso a la lista de pagos a realizar a partir de la fecha de aprobación.',
    btnTo: '/cliente/prestamo-aprobado',
  },
];
const Home = props => (
  <div className="home">
    <Hero authData={props.authData} />
    <section>
      <Card cards={cards} />
    </section>
  </div>
);

Home.propTypes = {
  authData: PropTypes.object.isRequired,
};

export default Home;

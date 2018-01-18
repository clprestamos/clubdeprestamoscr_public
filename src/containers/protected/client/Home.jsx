import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Hero from '../../../components/Hero';
import Card from '../../../components/Card';

const cards = [
  {
    icon: 'credit card alternative',
    header: 'Solicitud de crédito',
    content: 'Esta es la solicitud de préstamo que hemos recibido de su parte. Esta será publicada entre los miembros inversionista para que ellos lo valoren.',
    btnTo: '/cliente/solicitud-credito',
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
    <Hero userProfile={props.userProfile} />
    <section>
      <Card cards={cards} />
    </section>
  </div>
);

const mapStateToProps = state => ({
  userProfile: state.userProfile,
});

export default withRouter(connect(mapStateToProps)(Home));

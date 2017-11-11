import React from 'react';
import { Container } from 'semantic-ui-react';
import ScrollAnimation from 'react-animate-on-scroll';

import Section from '../components/Home/Section';
import PointerMenu from '../components/Home/PointerMenu';

import '../../style/animate.min.css'; // eslint-disable-line

const Main = () => (
  <div className="main">
    <PointerMenu
      menuItems={[
        { anchor: '/#acerca-de-nosotros', id: 1, isSelected: true },
        { anchor: '/#invertir', id: 2 },
        { anchor: '/#solicitud-de-credito', id: 3 },
      ]}
    />
    <Container fluid>
      <ScrollAnimation animateIn="fadeIn" initiallyVisible>
        <Section
          bgImg="images/portada-revista-costa-rica-ef-elfima-20131008-0015-1.jpg"
          title="Somos la primera comunidad de crédito “peer to peer” de Costa Rica"
          content="Nuestro enfoque de desarrollo basado en una nueva economía que acerca a ambas partes del proceso de crédito, reduciendo costos y trámites, a diferencia de los tradicionales sectores de crédito formal o préstamos entre particulares." // eslint-disable-line
          buttonText="Más acerca de nosotros"
          buttonType="large"
          buttonTo="/acercadenosotros"
          itemId="acerca-de-nosotros"
        />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <Section
          bgImg="images/portada-revista-costa-rica-ef-elfima-20131008-0015-2.jpg"
          title="Invierta con tranquilidad"
          content="La inversión tradicional tiene pocos rendimientos o es inestable, por eso hemos diseñado un sistema que permite ganar hasta un 43% de su inversión inicial, manteniendo en control su operación y eligiendo los proyectos de su preferencia." // eslint-disable-line
          buttonText="Invertir"
          buttonType="large"
          buttonTo="/invertir"
          itemId="invertir"
        />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <Section
          bgImg="images/portada-revista-costa-rica-ef-elfima-20131008-0015-3.jpg"
          title="CRÉDITO PARA SU DEUDA"
          content="Si los pagos en la casa de empeño, la tarjeta de crédito o el prestamista no le permiten avanzar, no baja la deuda y la relación se volvió un círculo vicioso de nunca acabar, es hora de formar parte del Club de Préstamos y dar un giro a su vida." // eslint-disable-line
          buttonText="Solicitar Préstamo"
          buttonType="large"
          buttonTo="/solicitudcredito"
          itemId="solicitud-de-credito"
        />
      </ScrollAnimation>
    </Container>
  </div>
);

export default Main;

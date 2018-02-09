import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { toggleMenuState } from '../actions';

import Question from '../components/Question';

const Faqs = (props) => {
  props.toggleMenuState(false);
  const faqsList = [
    {
      id: 1,
      question: '¿Cuándo duran en aprobar un crédito?',
      answer: 'El proceso de calificación de riesgo o Score crediticio puede durar hasta 24 horas, una vez enviado, los inversionistas podrán ver y evaluar las diferentes ofertas. El tiempo para recibir los fondos va a depender de la cantidad de inversionistas activos.',
    },
    {
      id: 2,
      question: '¿Qué cubre el pago de $15 del estudio?',
      answer: 'El pago de los $15 incluye el estudio completo crediticio y 15 días de membresía en la pagina del Club de Prestamos. ',
    },
    {
      id: 3,
      question: '¿Qué pasa si no consigo inversionista?',
      answer: 'Si no se logra conseguir un inversionista, puede comprar un mes adicional por $5 para que mas inversionistas puedan ver su oferta.',
    },
    {
      id: 4,
      question: 'Realicé el pago del estudio por medio de Paypal, sin embargo no se ve reflejado en la página, ¿Cómo se que se realizó el pago?',
      answer: 'En su cuenta de correo registrada en el sistema de Paypal, va encontrar un correo con el comprobante de pago. Este es el que debe reportar a info@clubdeprestamos.cr',
    },
    {
      id: 5,
      question: '¿Cuál es el tiempo promedio de respuesta de solicitud de Préstamos?',
      answer: 'El tiempo máximo para entregar el score crediticio es de 24 horas. De ahí ya tendrían visibilidad a los inversionistas.',
    },
    {
      id: 6,
      question: '¿Si tengo mancha crediticia, puedo optar por un préstamo?',
      answer: 'El tiempo máximo para entregar el score crediticio es de 24 horas. De ahí ya tendrían El score crediticio no depende solo de los créditos  si es buena pagadora, pesa más.',
    },
    {
      id: 7,
      question: '¿Cómo me hago inversionista?',
      answer: 'Solo tiene que ingresar a la sección de Inversionistas e ingresar la cédula.',
    },
    {
      id: 8,
      question: '¿Qué garantías tengo como inversionista?',
      answer: 'La garantía que se ofrece es una letra de cambio.',
    },
    {
      id: 9,
      question: '¿Cómo puedo optar por un préstamo?',
      answer: 'El primer paso es registrace a la plataforma y pagar el estudio crediticio.',
    },
    {
      id: 10,
      question: '¿Cuánto es el monto que tengo que pagar por un préstamo?',
      answer: 'Va de depender de su categoría de estrellas. Si es 5 estrellas pagaría 20% annual (100.000 colones mensuales aproximadamente).',
    },
    {
      id: 11,
      question: '¿Cuánto es el monto de interés que se aplica?',
      answer: 'La tasa de interés se determina en función a las categorías de estrellas que se otorgan al final el proceso de inscripción. La tasa mínima es del 20% annual y la máxima es de 60% annual.',
    },
    {
      id: 12,
      question: '¿ Sino tengo trabajo, puedo optar por un préstamo?',
      answer: 'Si puede optar por un crédito  pero tiene que demostrar capacidad de repago.',
    },
  ];
  const allFaqs = faqsList.map(item => (
    <Question
      question={item.question}
      answer={item.answer}
      key={item.id}
    />
  ));
  return (
    <div className="faqs-page">
      <div className="title">
        <h2><span>Preguntas más frecuentes entre nuestros usuarios</span></h2>
      </div>
      <div className="content">
        {allFaqs}
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    toggleMenuState,
  }, dispatch);

export default withRouter(connect(null, mapDispatchToProps)(Faqs));
